interface IHeaderProps {
  title: string;
}

export const Header = ({ title }: IHeaderProps) => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-primary/75 dark:bg-primary-dark/75">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center lg:text-left origin-left select-none [transform:scale(1.05,1)]">
          {title}
        </h1>
      </div>
    </header>
  );
};
