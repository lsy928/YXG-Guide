import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Workflow, FolderOpen, UserCog, Menu, X, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { searchIndex } from '../data/searchIndex';

const navItems = [
  { to: '/', label: '生存指引', icon: Home },
  { to: '/routine', label: '常规工作', icon: Workflow },
  { to: '/library', label: '资料库', icon: FolderOpen },
  { to: '/manager', label: '经验包', icon: UserCog }
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  
  const toggleSidebar = () => setIsOpen(!isOpen);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return searchIndex.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.keywords.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-sm rounded-xl mb-4 transition-colors">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-yuzu flex items-center justify-center overflow-hidden">
            <img src="/images/柚香谷logo.png" alt="柚香谷" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-text">入职指南</span>
        </div>
        <div className="flex gap-2">
            <button onClick={toggleSidebar} className="p-2 hover:bg-softgray rounded-lg text-text transition-colors">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-card rounded-r-xl p-4 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:rounded-xl md:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-yuzu flex items-center justify-center overflow-hidden">
                <img src="/images/柚香谷logo.png" alt="柚香谷" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-lg text-text">柚香谷实习生入职指南</span>
            </div>

            {/* Search Box */}
            <div className="relative mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text"
                  placeholder="搜索关键词..."
                  className="w-full pl-9 pr-4 py-2 bg-softgray border-none rounded-lg text-sm focus:ring-2 focus:ring-yuzu outline-none text-text placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowResults(true);
                  }}
                  onFocus={() => setShowResults(true)}
                  onBlur={() => setTimeout(() => setShowResults(false), 200)}
                />
              </div>

              {/* Search Results Dropdown */}
              {showResults && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 max-h-64 overflow-y-auto z-50">
                  {filteredResults.length > 0 ? (
                    <div className="py-2">
                      {filteredResults.map((item, idx) => (
                        <button
                          key={idx}
                          className="w-full text-left px-4 py-2 hover:bg-softgray transition-colors"
                          onClick={() => {
                            navigate(item.path);
                            setSearchQuery('');
                            setShowResults(false);
                            setIsOpen(false);
                          }}
                        >
                          <div className="font-medium text-sm text-text">{item.title}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{item.category}</div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-sm text-gray-500">
                      未找到相关内容
                    </div>
                  )}
                </div>
              )}
            </div>

            <nav className="space-y-1 flex-1">
            {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                    isActive ? 'bg-softgray text-text' : 'text-text hover:bg-softgray'
                    }`
                }
                >
                <Icon className="w-5 h-5 text-yuzu" />
                <span className="font-medium">{label}</span>
                </NavLink>
            ))}
            </nav>
        </div>
      </aside>
    </>
  );
}
