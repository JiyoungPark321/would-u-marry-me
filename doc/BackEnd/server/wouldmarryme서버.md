1. PuTTY 설치 

![image-20210518004143404](wouldmarryme%EC%84%9C%EB%B2%84.assets/image-20210518004143404.png)



2. PuTTYgen 열기 (pem 키 등록 해서 생성함) - key는 ssafy에서 

   <img src="wouldmarryme%EC%84%9C%EB%B2%84.assets/image-20210518004627086.png" alt="image-20210518004627086" style="zoom:60%;" /> ![image-20210518004343631](wouldmarryme%EC%84%9C%EB%B2%84.assets/image-20210518004343631.png)

3. Putty

   ![image-20210518004815556](wouldmarryme%EC%84%9C%EB%B2%84.assets/image-20210518004815556.png) - > ppk

   - Auth 클릭 - Browse - ppk클릭 

   - HostName (서버명 (도메인 )) / Saved Sessions (이름 설정) 후 save

     save후 Open

   

4. 서버 접속 

   ![image-20210518005252664](wouldmarryme%EC%84%9C%EB%B2%84.assets/image-20210518005252664.png)

5. util 설치

   sudo su로 관리자 권한 주기 

   `sudo apt update` 업데이트 진행

   `sudo apt install apt-transport-https`

   `sudo apt install ca-certificates`

   `sudo apt install curl`

   `sudo apt install software-properties-common`

   

6. docker 설치

   `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

   `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"`

   `sudo apt update`

   도커 다운로드 

   `apt-cache policy docker-ce`

   `sudo apt install docker-ce`

7. 도커에 Nginx 설치

   `sudo apt-get update`

   `sudo apt-get install nginx`

   `sudo service nginx restart`

   ![image-20210518011334083](wouldmarryme%EC%84%9C%EB%B2%84.assets/image-20210518011334083.png)

8. docker compose 설치

   `sudo curl -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose`

9. 권한 설정

   `sudo chmod +x /usr/local/bin/docker-compose`

10. 도커 컴포즈 설치 확인

    `docker-compose --version`

11.  docker-compose.yml 생성

    `vi docker-compose.yml`

12. Dockerfile

    `vi Dockerfile`

13. ![image-20210518012104803](wouldmarryme%EC%84%9C%EB%B2%84.assets/image-20210518012104803.png)
    wouldmarryme 폴더 안에 저렇게 폴더 생성해줌

14. Dockerfile에 내용 추가

    ```
    EXPOSE 8080
    
    #애플리케이션 추가 (jar)
    ADD ./backend/*.jar marry.jar
    ADD backend/application.yml /app/application.yml
    
    #실행명령
    ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","marry.jar", "--spring.config.location=/app/application.yml"]
    ```

15. docker-compose.yml에 내용 추가

    ```
    version: "3"
    services:
            marry_web:
                    image: nginx
                    ports:
                            - 80:80
                    volumes:
                            - ./nginx/nginx.conf:/etc/nginx/nginx.conf
                            - ./frontend/build:/var/www/html
                    depends_on:
                            - spring
            spring:
                    image: "spring"
                    ports:
                      - 8080:8080
    ```

16. 경로 설정

    ```
      listen 80;
       access_log off;
    
       server_name wouldumarryme.com www.wouldumarryme.com;
    
       root /var/www/html;
       index index.php index.html index.htm index.nginx-debian.html;
    
    
       location / {
                   try_files $uri $uri/ /index.html; # index.html 위치 찾아줌
       }
    
       location /api {
            rewrite /api/(.*) /api/$1 break; #api/swagger-ui.html(경로재설정)
            proxy_pass http://spring:8080;
            proxy_set_header Host $host:$server_port;
            proxy_set_header X-Forwarded-Host $server_name;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       }
    }
    ```

17. 파일질라를 통해 backend폴더 , frontend폴더 안에 jar 파일 넣어주기 / build 파일 넣어주기 

    





















