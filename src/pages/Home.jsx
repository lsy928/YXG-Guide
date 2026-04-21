import { ClipboardCopy, Wifi, Printer, Check, PlusCircle, Pencil, Trash2, Home as HomeIcon } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const [paymentInfo, setPaymentInfo] = useState([
    { label: '公司银行账号', value: '浙江柚香谷控股股份有限公司' },
    { label: '开户行', value: '招行外滩支行' },
    { label: '账号', value: '121913573610401' }
  ]);
  const [addedCards, setAddedCards] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editDraft, setEditDraft] = useState({ title: '', items: [] });
  const [showAddBottom, setShowAddBottom] = useState(false);
  const [addDraft, setAddDraft] = useState({ title: '', items: [{ label: '', value: '' }] });

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
                <span className="font-medium">{item.value}</span>
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
              <span className="font-medium">HST123456</span>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText('SSID: YXG\n密码: HST123456')}
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

        {addedCards.map((card, idx) => {
          const isEditing = editingIndex === idx;
          const itemsText = card.items.map((it) => `${it.label}: ${it.value}`).join('\n');
          return (
            <div className="card" key={`card-${idx}`}>
              <div className="flex items-center justify-between">
                {!isEditing ? (
                  <h2 className="text-lg font-semibold">{card.title || '未命名卡片'}</h2>
                ) : (
                  <input
                    className="rounded-lg border border-softgray px-3 py-2 font-semibold"
                    placeholder="卡片名称"
                    value={editDraft.title}
                    onChange={(e) => setEditDraft({ ...editDraft, title: e.target.value })}
                  />
                )}
                <div className="flex gap-2">
                  {!isEditing ? (
                    <>
                      <button
                        className="btn"
                        onClick={() => {
                          setEditingIndex(idx);
                          setEditDraft({ title: card.title, items: card.items.map((i) => ({ ...i })) });
                        }}
                      >
                        <Pencil className="w-4 h-4" />
                        编辑
                      </button>
                      <button
                        className="btn"
                        onClick={() => {
                          const next = [...addedCards];
                          next.splice(idx, 1);
                          setAddedCards(next);
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                        删除
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => navigator.clipboard.writeText(itemsText)}
                      >
                        <ClipboardCopy className="w-4 h-4" />
                        复制全部
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-secondary"
                        onClick={() => {
                          const cleanItems = editDraft.items
                            .map((i) => ({ label: i.label.trim(), value: i.value.trim() }))
                            .filter((i) => i.label && i.value);
                          const next = [...addedCards];
                          next[idx] = { title: editDraft.title.trim(), items: cleanItems };
                          setAddedCards(next);
                          setEditingIndex(-1);
                          setEditDraft({ title: '', items: [] });
                        }}
                      >
                        保存
                      </button>
                      <button
                        className="btn"
                        onClick={() => {
                          setEditingIndex(-1);
                          setEditDraft({ title: '', items: [] });
                        }}
                      >
                        取消
                      </button>
                    </>
                  )}
                </div>
              </div>
              {!isEditing ? (
                <div className="mt-4 space-y-2">
                  {card.items.map((it, iidx) => (
                    <div className="flex justify-between" key={`item-${iidx}`}>
                      <span className="text-gray-500">{it.label}</span>
                      <span className="font-medium">{it.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  {editDraft.items.map((it, iidx) => (
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3" key={`edit-${iidx}`}>
                      <input
                        className="rounded-lg border border-softgray px-3 py-2 md:col-span-2"
                        placeholder="信息名称"
                        value={it.label}
                        onChange={(e) => {
                          const next = [...editDraft.items];
                          next[iidx] = { ...next[iidx], label: e.target.value };
                          setEditDraft({ ...editDraft, items: next });
                        }}
                      />
                      <input
                        className="rounded-lg border border-softgray px-3 py-2 md:col-span-2"
                        placeholder="信息内容"
                        value={it.value}
                        onChange={(e) => {
                          const next = [...editDraft.items];
                          next[iidx] = { ...next[iidx], value: e.target.value };
                          setEditDraft({ ...editDraft, items: next });
                        }}
                      />
                      <button
                        className="btn"
                        onClick={() => {
                          const next = [...editDraft.items];
                          next.splice(iidx, 1);
                          setEditDraft({ ...editDraft, items: next });
                        }}
                      >
                        删除
                      </button>
                    </div>
                  ))}
                  <button
                    className="btn btn-primary"
                    onClick={() => setEditDraft({ ...editDraft, items: [...editDraft.items, { label: '', value: '' }] })}
                  >
                    <PlusCircle className="w-4 h-4" />
                    增加一条信息
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </section>

      <div className="card">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">添加信息</h2>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddBottom(true)}
          >
            <PlusCircle className="w-4 h-4" />
            添加信息
          </button>
        </div>
        {showAddBottom ? (
          <div className="mt-4 space-y-3">
            <input
              className="rounded-lg border border-softgray px-3 py-2 w-full"
              placeholder="卡片名称"
              value={addDraft.title}
              onChange={(e) => setAddDraft({ ...addDraft, title: e.target.value })}
            />
            {addDraft.items.map((it, idx) => (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3" key={`add-${idx}`}>
                <input
                  className="rounded-lg border border-softgray px-3 py-2 md:col-span-2"
                  placeholder="信息名称"
                  value={it.label}
                  onChange={(e) => {
                    const next = [...addDraft.items];
                    next[idx] = { ...next[idx], label: e.target.value };
                    setAddDraft({ ...addDraft, items: next });
                  }}
                />
                <input
                  className="rounded-lg border border-softgray px-3 py-2 md:col-span-2"
                  placeholder="信息内容"
                  value={it.value}
                  onChange={(e) => {
                    const next = [...addDraft.items];
                    next[idx] = { ...next[idx], value: e.target.value };
                    setAddDraft({ ...addDraft, items: next });
                  }}
                />
                <button
                  className="btn"
                  onClick={() => {
                    const next = [...addDraft.items];
                    next.splice(idx, 1);
                    setAddDraft({ ...addDraft, items: next.length ? next : [{ label: '', value: '' }] });
                  }}
                >
                  删除
                </button>
              </div>
            ))}
            <div className="flex gap-3">
              <button
                className="btn btn-primary"
                onClick={() => setAddDraft({ ...addDraft, items: [...addDraft.items, { label: '', value: '' }] })}
              >
                <PlusCircle className="w-4 h-4" />
                增加一条信息
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  const cleanItems = addDraft.items
                    .map((i) => ({ label: i.label.trim(), value: i.value.trim() }))
                    .filter((i) => i.label && i.value);
                  if (!addDraft.title.trim() || cleanItems.length === 0) return;
                  setAddedCards([...addedCards, { title: addDraft.title.trim(), items: cleanItems }]);
                  setAddDraft({ title: '', items: [{ label: '', value: '' }] });
                  setShowAddBottom(false);
                }}
              >
                保存
              </button>
              <button
                className="btn"
                onClick={() => {
                  setAddDraft({ title: '', items: [{ label: '', value: '' }] });
                  setShowAddBottom(false);
                }}
              >
                取消
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
