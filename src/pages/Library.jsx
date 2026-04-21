import { useState } from 'react';
import { FileSpreadsheet, Download, X, Search, Globe, Lightbulb, BarChart3, TrendingUp, Users, Wind, Tag, Zap, FileText } from 'lucide-react';

export default function Library() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [toast, setToast] = useState(null);
  const [activeTabId, setActiveTabId] = useState('tab1');

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const partnerCases = [
    {
      id: 7,
      title: '哔哩哔哩',
      fileTitle: '哔哩哔哩IP管理中心-IP合作介绍（2025Q4）.pdf',
      file: '/files/library/partners&suppliers/哔哩哔哩IP管理中心-IP合作介绍（2025Q4）.pdf',
    },
    {
      id: 8,
      title: '晓德',
      fileTitle: '晓德产品介绍.pdf',
      file: '/files/library/partners&suppliers/晓德产品介绍.pdf',
    },
    {
      id: 9,
      title: '科力普',
      fileTitle: '科力普2025Q3-公司介绍9.18.pptx',
      file: '/files/library/partners&suppliers/科力普2025Q3-公司介绍9.18.pptx',
    },
    {
      id: 10,
      title: '心诚有礼',
      fileTitle: '心诚有礼公司介绍.pptx',
      file: '/files/library/partners&suppliers/心诚有礼公司介绍.pptx',
    }
  ];

  const brandAssetCases = [
    {
      id: 'brand1',
      title: '柚香谷品牌介绍-260320',
      fileTitle: '柚香谷品牌介绍-260320.pdf',
      file: '/files/library/brand_introduction/柚香谷品牌介绍-260320.pdf',
    },
    {
      id: 'brand2',
      title: '柚香谷品牌介绍-260320（英文版）',
      fileTitle: '柚香谷品牌介绍(Eng.ver)-260320.pdf',
      file: '/files/library/brand_introduction/柚香谷品牌介绍(Eng.ver)-260320.pdf',
    }
  ];

  const newProductCases = [
    {
      id: 1,
      title: '可替换香氛机',
      desc: '供应链寻源与成本测算',
      focus: '本表为陈经理提供的基础SOP示范。核心侧重于B端供应链摸底。通过对比1688平台不同代工厂（OEM）的报价阶梯、材质工艺与起订量等，快速核算新产品的基础BOM成本与预估利润空间。',
      tags: ['1688', 'OEM代工', '成本核算'],
      image: '/images/library/incubation_diffuser.png',
      file: '/files/library/practical_case/incubation_diffuser_cost.xlsx',
      icon: <Wind className="w-5 h-5 text-emerald-500" />,
      color: 'bg-emerald-50 border-emerald-100'
    },
    {
      id: 2,
      title: '香片',
      desc: 'C端定价区间与用户反馈洞察',
      focus: '基于基础SOP的灵活变通版。因香片品类特性，本次调研舍弃B端寻源，全面转向C端电商（淘宝）数据分析。重点拆解头部竞品的价格带分布，并深度爬取评论区数据，提炼未被满足的用户痛点，为产品差异化提供依据。',
      tags: ['淘宝', '竞品分析', '需求挖掘'],
      image: '/images/library/incubation_fragrance_card.png',
      file: '/files/library/practical_case/incubation_fragrance_analysis.xlsx',
      icon: <Tag className="w-5 h-5 text-blue-500" />,
      color: 'bg-blue-50 border-blue-100'
    },
    {
      id: 3,
      title: '鼻通',
      desc: '供需双端全链路调研',
      focus: '结合前两次经验的‘完全体’调研模型。前端锁定淘宝竞品评价与价格分布以确认市场机会点；后端同步介入1688进行OEM寻源与成本测算。实现从‘探寻用户痛点’到‘评估落地可行性’的完整商业闭环。',
      tags: ['淘宝', '1688', '竞品分析', 'OEM代工'],
      images: ['/images/library/incubation_inhaler1.png', '/images/library/incubation_inhaler2.png'],
      file: '/files/library/practical_case/incubation_inhaler_full_survey.xlsx',
      icon: <Zap className="w-5 h-5 text-orange-500" />,
      color: 'bg-orange-50 border-orange-100'
    }
  ];

  const getTagColor = (tag) => {
    if (tag === '1688') return 'bg-orange-100 text-orange-800 border-orange-200';
    if (tag === '淘宝') return 'bg-red-100 text-red-800 border-red-200';
    return 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const overseasCases = [
    {
      id: 4,
      title: '澳洲市场',
      tags: ['Umall'],
      date: '2025/09/17',
      focus: '陈经理提供的出海调研基础示范。锁定澳洲华人主流电商平台 Umall，对标核心果汁与汽水竞品的定价基准。',
      image: '/images/library/overseas_au_umall.png',
      file: '/files/library/practical_case/overseas_au_umall_pricing.xlsx',
      icon: <BarChart3 className="w-5 h-5 text-orange-500" />,
      color: 'bg-orange-50 border-orange-100'
    },
    {
      id: 5,
      title: '澳洲市场',
      tags: ['Umall', 'Ebest', 'Kakabuy'],
      date: '2026/02/10',
      focus: '在基础示例上进行横向拓展。引入 Ebest 和 Kakabuy 渠道进行交叉比对，扩充了商品样本量。',
      tip: '跨国价格调研需密切关注实时汇率波动。拉取数据时务必备注当天的汇率基准，确保价格对比的时效性与准确性。',
      tipColor: 'bg-yellow-50 text-yellow-800 border-yellow-100',
      image: '/images/library/overseas_au_multi.png',
      file: '/files/library/practical_case/overseas_au_multi_channel.xlsx',
      icon: <Globe className="w-5 h-5 text-indigo-500" />,
      color: 'bg-indigo-50 border-indigo-100'
    },
    {
      id: 6,
      title: '德国市场',
      tags: ['ochama', 'GoAsia', '打酱油'],
      date: '2026/02/13',
      focus: '综合比对 ochama、goasia 和 打酱油 三大平台的定价策略。',
      tip: '德国有严格的 Pfand（空瓶回收押金）制度！记录终端售价时，必须手动剔除押金部分，才能反映真实的商品裸价，切忌直接抓取页面总价！',
      tipColor: 'bg-red-50 text-red-800 border-red-100',
      image: '/images/library/overseas_de_market.png',
      file: '/files/library/practical_case/overseas_de_market_survey.xlsx',
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
      color: 'bg-amber-50 border-amber-100'
    }
  ];

  const internalTestCases = [
    {
      id: 'it1',
      title: '鼻通内测',
      date: '2026/03/10 & 2026/03/24',
      focus: '整合了第一批次打样与第二批次调优打样的测试反馈。通过两次测试数据的纵向对比，客观验证了配方调整后的有效性与改进程度，旨在评估核心气味接受度及整体使用体验的优化结果。',
      color: 'bg-teal-50 border-teal-100',
      type: 'internal_test',
      hasTabs: true,
      tabs: [
        {
          id: 'tab1',
          label: '第一批次 (2026/03/10)',
          image: '/images/library/internal_test_bitong_0310.png'
        },
        {
          id: 'tab2',
          label: '第二批次 (2026/03/24)',
          image: '/images/library/internal_test_bitong_0324.png'
        }
      ]
    },
    {
      id: 'it2',
      title: '身体乳内测',
      date: '2026/03/19',
      focus: '采用控制变量法，要求受试者对“轻盈版”与“粒子版”两款打样进行左右侧肢体涂抹对比。重点评估质地延展性、吸收速度及肤感清爽度，并针对粒子版专项排查了颗粒融化度与摩擦感，以评估潜在客诉风险。',
      color: 'bg-indigo-50 border-indigo-100',
      type: 'internal_test',
      image: '/images/library/internal_test_bodylotion.png'
    },
    {
      id: 'it3',
      title: '润唇膏内测',
      date: '2026/03/24',
      focus: '针对“轻盈保湿版”与“神经酰胺修护版”两款无香精基质进行A/B测试。采用五分量表，多维度量化评估即时涂抹感、上嘴清爽度、长效保湿力及起皮修护效果，调研结论将作为最终选品上架的核心依据。',
      color: 'bg-rose-50 border-rose-100',
      type: 'internal_test',
      image: '/images/library/internal_test_lipbalm.png'
    },
    {
      id: 'it4',
      title: '牙膏内测',
      date: '2026/03/24',
      focus: '围绕海盐酵素与香柚提取物等核心成分的综合体验进行内部盲测。旨在系统收集受试者对产品起泡程度、清洁效力、留香表现及口腔整体体感的客观定性反馈。',
      color: 'bg-amber-50 border-amber-100',
      type: 'internal_test',
      image: '/images/library/internal_test_toothpaste.png'
    }
  ];

  return (
    <div className="space-y-8">
        <header className="card bg-gradient-to-r from-yuzu/10 to-transparent border-l-4 border-yuzu">
            <h1 className="text-2xl font-bold flex items-center gap-2">
                <FileSpreadsheet className="w-8 h-8 text-yuzu" />
                资料库
            </h1>
            <p className="text-gray-600 mt-2">
                存放实战调研案例、合作方档案与各类参考资料。
            </p>
        </header>

        {/* Section 1: Showcase */}
        <section className="space-y-8">
            <div className="border-b pb-4">
                <h2 className="text-2xl font-bold text-gray-800">实战案例展厅</h2>
                <p className="text-gray-500 mt-1">这里存放的是已完成的调研表格示例，而非固定模板。每一个案例都代表了一次真实的实战经验。</p>
            </div>

            {/* Subsection 1.1: New Product */}
            <section>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                    新品孵化调研案例
                </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {newProductCases.map(item => (
                    <div 
                        key={item.id} 
                        onClick={() => setSelectedCase(item)}
                        className={`p-5 rounded-xl border transition-all cursor-pointer hover:shadow-md hover:-translate-y-1 ${item.color}`}
                    >
                        <h3 className="font-semibold text-gray-900 leading-snug">{item.title}</h3>
                        {item.tags && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {item.tags.map((tag, idx) => (
                                    <span key={idx} className={`text-xs px-2 py-0.5 rounded border ${getTagColor(tag)}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

            {/* Subsection 1.2: Internal Test */}
        <section>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span>
            新品样品内测案例
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {internalTestCases.map(item => (
              <div 
                key={item.id} 
                onClick={() => setSelectedCase(item)}
                className={`p-6 rounded-xl border transition-all cursor-pointer hover:shadow-md hover:-translate-y-1 ${item.color} flex flex-col justify-center min-h-[120px]`}
              >
                <h3 className="text-2xl font-bold text-gray-900 leading-snug">{item.title}</h3>
                <div className="mt-2 text-sm text-gray-400">
                  {item.date}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subsection 1.3: Overseas */}
            <section>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                    成熟产品出海调研案例
                </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {overseasCases.map(item => (
                    <div 
                        key={item.id} 
                        onClick={() => setSelectedCase(item)}
                        className={`p-5 rounded-xl border transition-all cursor-pointer hover:shadow-md hover:-translate-y-1 ${item.color} flex flex-col`}
                    >
                        <h3 className="text-xl font-bold text-gray-900 leading-snug">{item.title}</h3>
                        
                        {item.tags && (
                            <div className="flex flex-wrap gap-2 mt-3">
                                {item.tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs px-2 py-0.5 rounded border bg-white/60 border-gray-200 text-gray-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        
                        <div className="mt-auto pt-4 text-xs font-medium text-gray-400">
                            {item.date}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </section>

        {/* Section 2: Partner Archive */}
        <section>
            <div className="mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                    合作方与供应商档案库
                </h2>
                <p className="text-gray-500 text-sm mt-1">包含已合作与潜在合作公司的企业介绍。</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {partnerCases.map(item => (
                    <div 
                        key={item.id} 
                        className="p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all flex flex-col gap-4"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            <div className="flex items-start gap-2 mt-2 text-gray-600">
                                <FileText className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                <span className="text-sm font-medium leading-tight">{item.fileTitle}</span>
                            </div>
                        </div>
                        
                        <a 
                            href={item.file}
                            download
                            className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg border border-gray-200 transition-colors text-sm text-center block mt-auto"
                        >
                            下载文件
                        </a>
                    </div>
                ))}
            </div>
        </section>

        {/* Section 3: Brand Assets */}
        <section>
            <div className="mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                    品牌资产与多语言文档库
                </h2>
                <p className="text-gray-500 text-sm mt-1">柚香谷核心品牌心智与视觉规范沉淀。包含公司最新中文原版，以及适配海外市场的英文编译版。</p>
            </div>
            
            <div className="grid grid-cols-1 gap-5">
                {brandAssetCases.map(item => (
                    <div 
                        key={item.id} 
                        className="p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all flex flex-col gap-4"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            <div className="flex items-start gap-2 mt-2 text-gray-600">
                                <FileText className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                <span className="text-sm font-medium leading-tight">{item.fileTitle}</span>
                            </div>
                        </div>
                        
                        <a 
                            href={item.file}
                            download
                            className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg border border-gray-200 transition-colors text-sm text-center block mt-auto"
                        >
                            下载文件
                        </a>
                    </div>
                ))}
            </div>
        </section>

        {/* Toast */}
        {toast && (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-6 py-3 rounded-full text-sm font-medium shadow-xl z-[60] animate-in fade-in zoom-in-95 duration-200">
                {toast}
            </div>
        )}

        {/* Modal */}
        {selectedCase && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => { setSelectedCase(null); setActiveTabId('tab1'); }}>
                <div 
                    className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-200"
                    onClick={(e) => e.stopPropagation()}
                >
                    
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100 flex items-start justify-between sticky top-0 bg-white z-10">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">{selectedCase.title}</h3>
                            <p className="text-gray-500 mt-1">{selectedCase.desc}</p>
                        </div>
                        <button 
                            onClick={() => { setSelectedCase(null); setActiveTabId('tab1'); }}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-gray-500" />
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        {selectedCase.type === 'internal_test' ? (
                            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5 flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                                </div>
                                <p className="text-yellow-900/90 leading-relaxed text-base">
                                    {selectedCase.focus}
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5 flex gap-4">
                                    <div className="shrink-0 mt-1">
                                        <Lightbulb className="w-5 h-5 text-yellow-600" />
                                    </div>
                                    <p className="text-yellow-900/90 leading-relaxed text-base">
                                        {selectedCase.focus}
                                    </p>
                                </div>

                                {selectedCase.tip && (
                                    <div className="bg-red-50 border border-red-100 rounded-xl p-5 flex gap-4">
                                        <div className="shrink-0 mt-1">
                                            <Lightbulb className="w-5 h-5 text-red-600" />
                                        </div>
                                        <p className="text-red-900/90 leading-relaxed text-base">
                                            {selectedCase.tip}
                                        </p>
                                    </div>
                                )}
                            </>
                        )}

                        {/* Middle: Preview */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-gray-700">
                                    {selectedCase.type === 'internal_test' ? '问卷预览' : '数据预览'}
                                </h4>
                                {selectedCase.hasTabs && (
                                    <div className="flex bg-gray-100 p-1 rounded-lg">
                                        {selectedCase.tabs.map(tab => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTabId(tab.id)}
                                                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                                                    activeTabId === tab.id 
                                                    ? 'bg-white text-gray-900 shadow-sm' 
                                                    : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            {selectedCase.hasTabs ? (
                                <div className="relative w-full overflow-hidden rounded-xl border border-gray-200">
                                    {selectedCase.tabs.map(tab => (
                                        <div 
                                            key={tab.id}
                                            className={`transition-opacity duration-300 ${activeTabId === tab.id ? 'block opacity-100' : 'hidden opacity-0'}`}
                                        >
                                            <img 
                                                src={tab.image} 
                                                alt={`${selectedCase.title}-${tab.label}`}
                                                className="w-full object-contain bg-gray-50"
                                                onClick={() => window.open(tab.image, '_blank')}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="aspect-video bg-gray-100 flex-col items-center justify-center text-gray-400" style={{ display: 'none' }}>
                                                <FileSpreadsheet className="w-16 h-16 mb-4 opacity-50" />
                                                <span className="text-lg font-medium">请将图片重命名为: {tab.image.split('/').pop()}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : selectedCase.images ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedCase.images.map((img, idx) => (
                                        <img 
                                            key={idx}
                                            src={img} 
                                            alt={`${selectedCase.title}-${idx}`}
                                            className="w-full rounded-xl border border-gray-200 object-cover cursor-zoom-in"
                                            onClick={() => window.open(img, '_blank')}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    ))}
                                </div>
                            ) : selectedCase.image ? (
                                <img 
                                    src={selectedCase.image} 
                                    alt={selectedCase.title}
                                    className="w-full rounded-xl border border-gray-200 object-cover cursor-zoom-in"
                                    onClick={() => window.open(selectedCase.image, '_blank')}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            ) : null}
                        </div>
                    </div>

                    {/* Bottom: Action */}
                    {selectedCase.type !== 'internal_test' && (
                        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end">
                            {selectedCase.file ? (
                                <a 
                                    href={selectedCase.file} 
                                    download 
                                    className="flex items-center gap-2 bg-yuzu hover:bg-yuzu-dark text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-sm hover:shadow active:scale-95"
                                >
                                    <Download className="w-5 h-5" />
                                    下载 Excel 示例文件
                                </a>
                            ) : (
                                <button 
                                    disabled
                                    className="flex items-center gap-2 bg-gray-300 text-white font-medium px-6 py-3 rounded-lg cursor-not-allowed"
                                >
                                    <Download className="w-5 h-5" />
                                    暂无文件
                                </button>
                            )}
                        </div>
                    )}

                </div>
            </div>
        )}
    </div>
  );
}
