# Java and Angular Case Study

A people-registration case study split across two branches in this repository.

| Branch | Code | Stack |
| --- | --- | --- |
| `main` | People list and registration form | Angular 17, Angular Material, TypeScript |
| [`master`](https://github.com/MatheusHVM/Case-Java-Angular/tree/master) | REST API in `case/` | Java 17, Spring Boot 3.3, Spring Data JPA, MySQL |

The Angular interface implements a paginated list and create, edit and delete actions. The Java API provides those operations under `/pessoas`, with additional create, read by ID, update and delete operations under `/cidades`.

## Run the API

Use separate checkouts so both branches are available at once.

```sh
git clone --branch master https://github.com/MatheusHVM/Case-Java-Angular.git case-backend
cd case-backend/case
```

Create an empty local MySQL database and set `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME` and `SPRING_DATASOURCE_PASSWORD` in your shell. For a disposable local database, set `SPRING_JPA_HIBERNATE_DDL_AUTO=update` to have Hibernate create the mapped tables. Run `./mvnw spring-boot:run` or `.\mvnw.cmd spring-boot:run` on Windows. Test pagination at `http://localhost:8080/pessoas?page=0&pageSize=10`. Creating a person through the API requires a valid `cidadeId` for an existing city.

## Run the frontend

From a separate directory, with Node.js and npm installed:

```sh
git clone --branch main https://github.com/MatheusHVM/Case-Java-Angular.git case-frontend
cd case-frontend
npm ci
npm start
```

Open `http://localhost:4200`. The service calls `http://localhost:8080/pessoas` directly, and the API allows the Angular origin. Use `npm run build` for a production build and `npm test` for the Karma suite.

## Integration status

The Angular model uses `_id`, `name`, `cidade` and `uf`. The Java API returns `id` and `nome` and expects `cidadeId` when saving a person. The frontend and API need a shared data contract for the people form and list to work together end to end.
