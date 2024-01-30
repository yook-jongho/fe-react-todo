# vite란?

개발 환경에서는 ES Module을 기반으로 번들링해서 빠른 속도를 제공하고,

프로덕션 환경에서는 Rollup 기반으로 번들링해서 안정성을 높인 번들러

> 성능 대 유연성 트레이드 오프를 고려했을 때 프로덕션 환경에서는 Rollup이 더 좋다고 한다.

## vite를 사용하는 이유

ESM을 지원하기 전까지, 소스 모듈을 브라우저에서 실행할 수 있는 파일로 바꾸는 번들링 방법을 사용해야했다.  
하지만, JS 모듈 개수의 극적 증가에 따른 병목현상이 발생되었고, 개발 서버 가동 및 HMR을 사용하더라도 적용되는데에 시간이 오래걸렸다.  
vite는 ESM기반으로 이런 문제를 해결한다.  
Webpack, Parcel 대비 10-100배 빠른 속도를 제공한다.

![Untitled](https://github.com/Sang-minKIM/fe-react-todo/assets/87116017/717f02f8-cbe8-43f8-a173-04e490a3dc62)

![Untitled](https://github.com/Sang-minKIM/fe-react-todo/assets/87116017/3025fcf2-df62-483a-bcdd-10fe83a1a633)

기존에는 처음에 모든 파일에 대한 번들링을 수행하고 이를 웹페이지에 불러왔다.  
이것을 해결하기 위해 HMR이 나왔지만 명확한 해답은 아니었다.  
vite는 ESM을 이용해서 수정된 모듈과 관련된 부분만 교체하고 교체된 모듈만 브라우저에 전달한다.  
따라서 앱 사이즈가 커져도 HMR을 포함한 갱신 시간에는 영향을 끼치지 않는다.

## 출처

[vite 공식문서](https://vitejs.dev/guide/why.html)
