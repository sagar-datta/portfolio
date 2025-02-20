interface IHeaderProps {
  title: string;
}

export const Header = ({ title }: IHeaderProps) => {
  return (
    <header className="sticky top-0 z-10 glass-blur">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-center lg:justify-start">
          <h1 className="text-2xl font-bold tracking-wider select-none [transform:scale(1.05,1)] origin-center lg:origin-left">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
};
