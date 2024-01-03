import setActiveBG from "./setActiveBG";
import setHoverColor from "./setHoverColor";

export interface Publication {
  _id: number;
  author: string;
  title: string;
  date: string;
  subject: string;
  slug: string;
  cardDescription: string;
  publicationContent: string;
  picture: string;
  accent: string;
}

export interface Subject {
  subject: string;
  accentColor: string;
  slug: string;
}

export interface FilterButton {
  subject: Subject;
  activeStyle: string;
  unactiveStyle: string;
  selected: boolean;
  slug: string;
}

export const subjects: Subject[] = [
  {
    subject: "All",
    accentColor: "grey",
    slug: "all",
  },
  {
    subject: "Science/Research",
    accentColor: "green",
    slug: "sciRes",
  },
  { subject: "Engineering", accentColor: "red", slug: "eng" },
  { subject: "Computer Science", accentColor: "yellow", slug: "cs" },
  { subject: "Math/Physics", accentColor: "orange", slug: "maPh" },
];

const filterButtons: FilterButton[] = [
  ...subjects.map((subject) => {
    if (subject.slug === "all") {
      return {
        subject: subject,
        slug: subject.slug,
        activeStyle: setActiveBG(subject.accentColor),
        unactiveStyle: setHoverColor(subject.accentColor),
        selected: true,
      };
    }
    return {
      subject: subject,
      slug: subject.slug,
      activeStyle: setActiveBG(subject.accentColor),
      unactiveStyle: setHoverColor(subject.accentColor),
      selected: false,
    };
  }),
];

export default filterButtons;
