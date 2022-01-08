import { Images } from "./assets"

export const HEADER_CONTENT = {
  h1: 'Helping companies build better, scalable software.',
  p: 'Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook, and more.',
  logos: [
    Images.Walmart,
    Images.JPMorgan,
    Images.Visa,
    Images.Tinder,
    Images.Samsung,
    Images.Verizon
  ],
  projects: [
    { 
      h1: 'Spense.com', 
      p: 'Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they"ll get paid. Project in collaboration with Codewell.cc',
      image: Images.Spense
    }, 
    {
      h1: 'YelpCamp.com',
      p: 'Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd"s favorite in 2021.',
      image: Images.YelpCamp
    }
  ],
}