package com.ssafy.wouldUmarryme.marry.common.config;


import com.ssafy.wouldUmarryme.marry.account.repository.AccountRepository;
import com.ssafy.wouldUmarryme.marry.account.service.AuthenticationService;
import com.ssafy.wouldUmarryme.marry.common.security.JwtAuthenticationFilter;
import com.ssafy.wouldUmarryme.marry.common.security.JwtAuthorizationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final AuthenticationService authenticationService;
    private final AccountRepository accountRepository;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(authenticationProvider());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .cors().and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(new JwtAuthenticationFilter(authenticationManager()))
                .addFilter(new JwtAuthorizationFilter(authenticationManager(), this.accountRepository))
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/account/login").permitAll()
                .antMatchers(HttpMethod.POST, "/account","/account/id","/account/nickname","/account/search","/account/sms").permitAll()
                .antMatchers(HttpMethod.POST, "/music").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/background").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/spot").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/storytemplate").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/weddingcardtemplate").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/character").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/status").hasRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/storyboard/guest/**").permitAll()
                .anyRequest().authenticated();
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/asset/**", "/v2/api-docs", "/configuration/**",
                "/swagger-resources/**", "/api", "/swagger-ui.html", "/webjars/**", "/swagger-ui/**", "/swagger/**");
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedMethods(Collections.singletonList("*"));
        config.setAllowedOrigins(Collections.singletonList("*"));
        config.setAllowedHeaders(Collections.singletonList("*"));
        config.setExposedHeaders(Arrays.asList("Authorization"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    @Bean
    DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
        daoAuthenticationProvider.setUserDetailsService(this.authenticationService);

        return daoAuthenticationProvider;
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}