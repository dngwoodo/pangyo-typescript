export {}
// Mapped Type
// Mapped Type 글 = https://joshua1988.github.io/ts/usage/mapped-type.html#%EB%A7%B5%EB%93%9C-%ED%83%80%EC%9E%85-%EC%8B%A4%EC%9A%A9-%EC%98%88%EC%A0%9C-1
// Mapped Type Proposal 깃헙 PR = https://github.com/Microsoft/TypeScript/pull/12114
// javascript map API와 비슷하다.

type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [K in Heroes]: number }

const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000
}