interface IHeaderProps {
  title: string;
}

export function Header({ title }: IHeaderProps) {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      </div>
    </header>
  );
}
