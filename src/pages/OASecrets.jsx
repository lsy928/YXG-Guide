const steps = [
  { title: '填写申请', desc: '在 OA 系统中创建用印申请单' },
  { title: '上传附件', desc: '附上合同扫描件或相关材料' },
  { title: '部门审批', desc: '直属领导与部门负责人审批' },
  { title: '法务审批', desc: '法务审核合同条款与风险' },
  { title: '用印完成', desc: '至行政处完成盖章与归档' }
];

export default function OASecrets() {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-6">用印申请流程</h2>
      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-softgray" />
        <div className="space-y-8">
          {steps.map((s, idx) => (
            <div key={s.title} className="relative pl-12">
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-yuzu text-text grid place-items-center font-semibold">
                {idx + 1}
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="font-medium">{s.title}</div>
                  <div className="text-gray-600 text-sm">{s.desc}</div>
                </div>
              </div>
              <div className="mt-3 h-36 rounded-lg bg-gray-200 grid place-items-center text-gray-500">
                截图占位
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
