import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Terminal } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gruvbox-bg">
      <div className="text-center tui-window p-8 max-w-md">
        <div className="tui-titlebar -m-8 mb-8 px-4">
          <span className="tui-titlebar-dot bg-gruvbox-red" />
          <span className="tui-titlebar-dot bg-gruvbox-yellow" />
          <span className="tui-titlebar-dot bg-gruvbox-green" />
          <span className="ml-2">error</span>
        </div>
        <Terminal className="w-10 h-10 text-gruvbox-red mx-auto mb-4" />
        <h1 className="mb-2 text-4xl font-bold text-gruvbox-red">404</h1>
        <p className="mb-4 text-sm text-gruvbox-fg4">
          <span className="text-gruvbox-red">ERROR:</span> rota não encontrada: {location.pathname}
        </p>
        <a
          href="/"
          className="text-gruvbox-orange text-xs hover:text-gruvbox-yellow transition-colors"
        >
          $ cd ~ <span className="text-gruvbox-gray">-- voltar ao início</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
