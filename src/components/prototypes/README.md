Prototypes Components는 템플릿 Component와 유사하며, 모듈을 이용하여 페이지 조립.

서버로 데이터 요청은 이곳에서 하지않으며 필요한 데이터는 Page에서 받는다.

그러나 Post,Put,Patch와 같은 Mutaion을 사용하는 로직은 이곳에서 관리한다.

정리.
GET 요청 = Page
그외 나머지 = Prototypes
