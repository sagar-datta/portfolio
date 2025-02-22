export interface IPortfolioItem {
  id: number;
  title: string;
  descriptionHeading: string;
  descriptionExtended: string;
  url: string;
  imagePath: {
    light: string;
    dark: string;
  };
  color: string;
  techStack: string[];
}
