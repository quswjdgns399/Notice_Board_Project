### **📝 Project Overview**

- **Project Name**: 개인 프로젝트 (Java, Spring Boot, React 기반)
- **Description**: 회원가입 및 소셜 로그인 기능을 갖춘 게시판 시스템. 회원은 관리자와 일반회원으로 나뉘며 권한에 맞는 작업을 수행할 수 있음. AWS, Docker, CI/CD 파이프라인 등을 활용하여 클라우드 환경에서 배포 및 관리.

### **📚 Languages & Frameworks**

1. **Frontend**

- **React** : 사용자 인터페이스 구현.
- **JavaScript** : 주요 프론트엔드 언어.
- **Node.js** : SSR(Server-Side Rendering)을 위한 프론트 서버.

1. **Backend:**

- **Java** : 주요 백엔드 언어.
- **Spring Boot** : 백엔드 프레임워크, REST API 구현.
- **Spring Security** : 사용자 인증 및 권한 관리.
- **JWT** : 인증 토큰 방식.
- **OAuth2** : 소셜 로그인(Google, Facebook) 구현.

1. **Database:**

- **MySQL (RDB)** : 관계형 데이터베이스.
- **Redis (NoSQL)** : 캐시와 세션 관리에 사용.

### **⚙️ Technologies & Tools**

1. **Deployment & Infrastructure**

- **AWS EC2** : 백엔드 서버 배포.
- **AWS RDS** : MySQL 데이터베이스 배포.
- **AWS S3** : 파일 업로드 및 저장소.
- **Vercel** : 프론트엔드 배포.
- **Docker** : 컨테이너화 및 배포.

1. **CI/CD**

- **GitHub Actions** : CI/CD 자동화 파이프라인 구축.

1. **Security & Authentication**

- **Spring Security** : 인증 및 권한 관리.
- **JWT** : 토큰 기반 인증.
- **OAuth2** : 소셜 로그인 구현 (Google, Facebook 등).

1. **Monitoring & Logging**

- **Prometheus + Grafana**: 서버 모니터링 및 성능 대시보드.
- **ELK Stack (Elasticsearch, Logstash, Kibana)**: 로그 관리 및 시각화.

### **🛠 Development Tools**

1. **IDE**

- **IntelliJ IDEA** : 주 백엔드 개발 도구.
- **VS Code** : 프론트엔드 개발 도구.

1. **Version Control**

- **Git**: 버전 관리.
- **GitHub**: 코드 저장소.

1. **Testing**:

- **JUnit/Mockito**: 백엔드 단위 테스트.
- **Cypress/Selenium**: 프론트엔드 통합 테스트.

### **🏗 Architecture**

1. **Frontend**:

- React로 UI 개발.
- Next.js 혹은 Node.js로 SSR 적용.

1. **Backend**:

- Spring Boot로 REST API 구현.
- Spring Security와 OAuth2로 인증 및 권한 관리.

1. **Database**:

- AWS RDS에서 MySQL을 통해 관계형 데이터를 처리.
- Redis를 통해 캐싱과 세션 관리.

1. **CI/CD**:

- GitHub Actions로 배포 자동화.
- Docker를 사용해 컨테이너화 및 AWS EC2에 배포.

### **📅 Project Phases**

1. **Phase 1: Initial Setup**

• Spring Boot와 React 프로젝트 초기 설정.

• Docker Compose로 MySQL, Redis 로컬 설정.

2. **Phase 2: Authentication**

• Spring Security와 JWT 기반 인증 구현.

• OAuth2로 소셜 로그인 기능 추가.

3. **Phase 3: CRUD Implementation**

• 게시판에서 글 작성, 수정, 삭제, 조회 기능 구현.

4. **Phase 4: Frontend & SSR**

• React로 프론트엔드 UI 개발.

• SSR을 위한 Next.js 또는 Node.js 사용.

5. **Phase 5: Deployment**

• AWS EC2와 Vercel을 이용한 배포.

• GitHub Actions를 통한 CI/CD 자동화.

6. **Phase 6: Monitoring & Logging**

• Prometheus, Grafana 및 ELK Stack을 사용한 모니터링 및 로그 관리.
