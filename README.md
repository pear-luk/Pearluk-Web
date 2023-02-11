.
├── components
│   ├── elements
│   │   ├── Button
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── CheckBox
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── ImgButton
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── InputText
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── Label
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── README.md
│   │   ├── Text
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   └── Textarea
│   │       ├── index.stories.tsx
│   │       └── index.tsx
│   ├── foundations
│   │   ├── AddressForm
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── CartListItem
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── Footer
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── Header
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── InputAddress
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── InputLabel
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── InputPhone
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── Menu
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── Modal
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── Nav
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── OrderListItem
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── PageNationButton
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── PriceLabel
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── ProductItem
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   └── QnAListItem
│   │       ├── index.stories.tsx
│   │       └── index.tsx
│   ├── layout.stories.tsx
│   ├── layout.tsx
│   ├── modules
│   │   ├── AmountCard
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── MyInfoCard
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── OrderListCard
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   ├── QnAWriteCard
│   │   │   ├── index.stories.tsx
│   │   │   └── index.tsx
│   │   └── TotalPriceCard
│   └── prototypes
│       ├── ArchiveTemplate
│       │   ├── index.tsx
│       │   └── layout.stories.tsx
│       ├── CartTemplate
│       │   ├── index.tsx
│       │   └── layout.stories.tsx
│       ├── MyTemplate
│       │   ├── index.tsx
│       │   └── layout.stories.tsx
│       ├── QnAListTemplate
│       └── README.md
├── hooks
│   ├── API
│   │   ├── archive
│   │   │   └── getArchiveList.ts
│   │   ├── auth
│   │   │   └── getAuth.ts
│   │   └── login
│   │       └── socialLogin.ts
│   ├── mutation
│   │   ├── login.tsx
│   │   └── logout.ts
│   ├── queries
│   │   ├── MyQuery.tsx
│   │   ├── archiveQuery.tsx
│   │   ├── authQuery.tsx
│   │   ├── key
│   │   │   └── index.ts
│   │   ├── orderQuery.tsx
│   │   └── productQuery.tsx
│   └── util
│       ├── API.tsx
│       └── useRecoilQuery.ts
├── middleware.ts
├── mock
│   ├── archive.mock.ts
│   ├── businessInfo.mock.ts
│   ├── order.mock.ts
│   ├── product.mock.ts
│   ├── question.mock.ts
│   └── user.mock.ts
├── pages
│   ├── _api
│   │   └── hello.ts
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about
│   │   └── index.tsx
│   ├── archives
│   │   └── [archive_id].tsx
│   ├── cart
│   │   └── index.tsx
│   ├── index.stories.tsx
│   ├── index.tsx
│   ├── login
│   │   ├── index.stories.tsx
│   │   └── index.tsx
│   ├── my
│   │   ├── index.stories.tsx
│   │   └── index.tsx
│   ├── oauth
│   │   └── callback
│   │       └── kakao
│   │           └── index.tsx
│   └── qa
│       ├── index.stories.tsx
│       └── index.tsx
├── recoil
│   ├── archive
│   │   └── state.ts
│   ├── auth
│   │   └── state.ts
│   └── user
│       └── state.ts
├── stories
│   ├── Header.stories.tsx
│   ├── Header.tsx
│   ├── Introduction.stories.mdx
│   ├── Page.stories.tsx
│   ├── Page.tsx
│   ├── assets
│   │   ├── code-brackets.svg
│   │   ├── colors.svg
│   │   ├── comments.svg
│   │   ├── direction.svg
│   │   ├── flow.svg
│   │   ├── plugin.svg
│   │   ├── repo.svg
│   │   └── stackalt.svg
│   ├── header.css
│   └── page.css
├── styles
│   ├── globalStyle.ts
│   ├── styled.d.ts
│   └── theme.ts
└── types
    ├── common
    │   ├── baseResponse.ts
    │   ├── commonData.ts
    │   └── propsTypes.tsx
    ├── model
    │   ├── address.ts
    │   ├── answer.ts
    │   ├── archive.ts
    │   ├── category.ts
    │   ├── order.ts
    │   ├── product.ts
    │   ├── question.ts
    │   └── user.ts
    ├── request
    │   ├── login.ts
    │   ├── order.ts
    │   └── product.ts
    └── response
        ├── answer.ts
        ├── archive.ts
        ├── auth.ts
        ├── category.ts
        ├── login.ts
        ├── my.ts
        ├── order.ts
        ├── product.ts
        ├── question.ts
        └── user.ts