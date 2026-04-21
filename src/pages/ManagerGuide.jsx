import { Printer, Stamp, FolderOpen, ChevronDown, ChevronUp, UserCog, Package } from 'lucide-react';
import { useState } from 'react';

const ExpandableCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongContent = [3, 4].includes(item.id); // 目前第3和第4个卡片内容较长

  return (
    <div
      key={item.id}
      className={`relative p-6 rounded-lg shadow-sm border-2 ${item.color} transform transition hover:-translate-y-1 hover:shadow-md break-inside-avoid`}
    >
      <div className="flex items-center gap-3 mb-4 mt-2">
        <div className="p-2 bg-white/60 rounded-lg shadow-sm">
          {item.icon}
        </div>
        <h2 className="text-lg font-bold leading-tight">{item.title}</h2>
      </div>
      
      <div className={`leading-relaxed opacity-90 text-sm md:text-base ${!isExpanded && isLongContent ? 'max-h-48 overflow-hidden relative' : ''}`}>
        {item.content}
        {!isExpanded && isLongContent && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-current/5 to-transparent pointer-events-none" />
        )}
      </div>

      {isLongContent && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider opacity-70 hover:opacity-100 transition-opacity"
        >
          {isExpanded ? (
            <><ChevronUp className="w-4 h-4" /> 收起内容</>
          ) : (
            <><ChevronDown className="w-4 h-4" /> 展开全文</>
          )}
        </button>
      )}

      {/* 淡淡的便利贴折角阴影 */}
      <div 
        className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.05) 50%)',
          borderTopLeftRadius: '0.25rem',
        }}
      ></div>
    </div>
  );
};

export default function ManagerGuide() {
  const pitfalls = [
    {
      id: 1,
      title: '硬件操作防雷区',
      icon: <Printer className="w-8 h-8 text-yellow-700" />,
      content: (
        <>
          使用公司机器扫描文件时，请务必将文件 <span className="font-bold text-yellow-800 bg-yellow-200 px-1 rounded">正面朝上</span> 放置进输稿器，否则扫出来的全是一堆白纸！
        </>
      ),
      color: 'bg-yellow-100 border-yellow-200 text-yellow-900',
      pinColor: 'text-yellow-600',
    },
    {
      id: 2,
      title: '盖章流程隐藏规则',
      icon: <Stamp className="w-8 h-8 text-red-700" />,
      content: (
        <>
          如果是合同类文件，除了常规盖章，还必须敲 <span className="font-bold text-red-800 bg-red-200 px-1 rounded">骑缝章</span>，并留意是否需要 <span className="font-bold text-red-800 bg-red-200 px-1 rounded">留存一份在法务部</span>。
        </>
      ),
      color: 'bg-red-100 border-red-200 text-red-900',
      pinColor: 'text-red-600',
    },
    {
      id: 3,
      title: '文件整理方案',
      icon: <FolderOpen className="w-8 h-8 text-blue-700" />,
      content: (
        <ul className="list-decimal pl-4 space-y-2 text-sm">
          <li>
            <span className="font-bold">采买事项商务核心条款批复表：</span>
            因该类文件数量最多，将其单独挑出作为一个独立分类，集中存放所有相关的日常条款批复表据。
          </li>
          <li>
            <span className="font-bold">市场分析报告与竞品调研资料：</span>
            专门存放由尚普咨询公司出具的市场调研报告，以及相关的各种竞品数据和分析材料。
          </li>
          <li>
            <span className="font-bold">财务结算与款项支出跟踪：</span>
            集中打包所有独立的数据明细表格，主要包括设备工程款应付明细表、2025年应付广告款明细，以及两份无抬头但属于广告款明细的补充表格。
          </li>
          <li>
            <span className="font-bold">广告投放与品牌营销：</span>
            主要归档涉及C端业务的广告投放协议、品牌营销策划及相关合作文件。
          </li>
          <li>
            <span className="font-bold">招采、设备与基建：</span>
            包含B端供应链侧的招投标文件、基础建设合同以及设备采购单据（含设备类报价单）。
          </li>
          <li>
            <span className="font-bold">产品研发与购销合作：</span>
            涵盖日常业务运营中的产品研发进度资料、国内购销合同以及国内贸易相关的各类报价单。
          </li>
          <li>
            <span className="font-bold">企业资质与海外业务：</span>
            收录企业合规性的资质证明文件、涉外相关的业务函件以及出口外贸类的合同与报价单。
          </li>
          <li>
            <span className="font-bold">综合商务函件与项目记录：</span>
            用于存放无法归入上述特定核心业务线的其他零散商务沟通往来信函与项目流程记录文件。
          </li>
        </ul>
      ),
      color: 'bg-blue-100 border-blue-200 text-blue-900',
      pinColor: 'text-blue-600',
    },
    {
      id: 4,
      title: '客情申请常用库存产品',
      icon: <Package className="w-8 h-8 text-emerald-700" />,
      content: (
        <ul className="space-y-3 text-sm">
          {[
            { name: '宋柚汁300g*20瓶装（CNY单面版）', code: '1010100211' },
            { name: '宋柚乳酸菌300g*20瓶装（CNY单面版）', code: '1020100056' },
            { name: '柚嗞香柚味汽水330ml*24罐装', code: '1050100017' },
            { name: '宋柚汁1kg*6瓶（电商泡沫装）', code: '1010100074' },
            { name: '宋柚乳酸菌风味饮料1kg*6瓶装（流通版）', code: '1020100034' }
          ].map((product, idx) => (
            <li key={idx} className="bg-white/40 p-2 rounded-lg border border-emerald-200/50">
              <div className="font-bold text-emerald-900 leading-tight">{product.name}</div>
              <div className="text-emerald-700 font-mono mt-1 flex items-center gap-1">
                <span className="opacity-50">代码:</span> {product.code}
              </div>
            </li>
          ))}
        </ul>
      ),
      color: 'bg-emerald-100 border-emerald-200 text-emerald-900',
      pinColor: 'text-emerald-600',
    },
  ];

  return (
    <div className="space-y-6">
      <header className="card bg-gradient-to-r from-yellow-50 to-transparent border-l-4 border-yellow-400">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
          <UserCog className="w-8 h-8 text-yuzu" />
          避坑经验包
        </h1>
        <p className="text-gray-600 mt-2">
          这里整理了那些在标准流程里找不到，但绝对能救命的实战经验。
        </p>
      </header>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {pitfalls.map((item) => (
          <ExpandableCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
