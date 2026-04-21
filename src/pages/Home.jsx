import { ClipboardCopy, Wifi, Printer, Check, Home as HomeIcon } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const paymentInfo = [
    { label: '公司银行账号', value: '浙江柚香谷控股股份有限公司' },
    { label: '开户行', value: '招行外滩支行' },
    { label: '账号', value: '联系内部人员获取', isMasked: true }
  ];

  const paymentText = paymentInfo
    .map(({ label, value }) => `${label}: ${value}`)
    .join('\n');

  const copyPayment = async () => {
    try {
      await navigator.clipboard.writeText(paymentText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('复制失败，请手动选择复制');
    }
  };

  return (
    <div className="space-y-6">
      <header className="card bg-gradient-to-r from-yuzu/10 to-transparent border-l-4 border-yuzu">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <HomeIcon className="w-8 h-8 text-yuzu" />
          欢迎来到柚香谷产品组！
        </h1>
        <p className="text-gray-600 mt-2">这里收集了你入职后常用的信息。</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">公司付款信息</h2>
            <button onClick={copyPayment} className="btn btn-secondary">
              {copied ? <Check className="w-4 h-4" /> : <ClipboardCopy className="w-4 h-4" />}
              {copied ? '已复制' : '点击复制'}
            </button>
          </div>
          <div className="mt-4 space-y-2">
            {paymentInfo.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span className="text-gray-500">{item.label}</span>
                <span className={`font-medium ${item.isMasked ? 'text-gray-400' : ''}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">公司地址</h2>
            <button
              className="btn btn-secondary"
              onClick={() => navigator.clipboard.writeText('上海市徐汇区光启文化广场A座7楼柚香谷')}
            >
              <ClipboardCopy className="w-4 h-4" />
              点击复制
            </button>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <span className="text-gray-500">地址</span>
              <span className="font-medium">上海市徐汇区光启文化广场A座7楼柚香谷</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <Wifi className="w-5 h-5 text-fresh" />
            <h2 className="text-lg font-semibold">Wi‑Fi 连接</h2>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">SSID</span>
              <span className="font-medium">YXG</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">密码</span>
              <span className="font-medium text-gray-400">联系内部人员获取</span>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText('SSID: YXG\n密码: 联系内部人员获取')}
              className="btn btn-primary mt-3"
            >
              <ClipboardCopy className="w-4 h-4" />
              复制网络信息
            </button>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <Printer className="w-5 h-5 text-yuzu" />
            <h2 className="text-lg font-semibold">打印机连接</h2>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">名称</span>
              <span className="font-medium">FF Apeos C3570 PCL 6（副本 1）</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">IP 地址</span>
              <span className="font-medium">10.1.10.92</span>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText('打印机: FF Apeos C3570 PCL 6（副本 1）\nIP: 10.1.10.92')}
              className="btn btn-primary mt-3"
            >
              <ClipboardCopy className="w-4 h-4" />
              复制打印机信息
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
