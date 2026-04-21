import { useState } from 'react';
import { Package, Workflow, CalendarClock } from 'lucide-react';
import VerticalStepper from '../components/VerticalStepper.jsx';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';

const expressSteps = [
  { title: '扫描二维码', desc: '撕取一张顺丰寄件单，用微信“扫一扫”扫描单子左上角的二维码，跳转至“顺丰速运+”小程序。' },
  { title: '填写基础信息', desc: '寄件人填写“柚香谷”，寄件地址填写公司地址，联系电话填写本人电话号码。', imgSrc: '/images/regularwork/packet_2.png' },
  { title: '选择服务', desc: '物品种类按实际选择，“上门取件”选择“无需预约”。', imgSrc: '/images/regularwork/packet_3.png' },
  { title: '月结付款', desc: '“付款方式”选择“寄付月结”，月结卡绑定公司账号，月结卡号为0211059404，公司名称为浙江柚香谷控股股份有限公司。', imgSrc: '/images/regularwork/packet_4.png' },
  { title: '提交订单', desc: '点击左下方”同意并阅读《电子运单契约条款》“并点击”下单“提交。' },
  { title: '贴单', desc: '将寄件单下方寄件联撕下并贴于包裹。' },
  { title: '交件', desc: '将包裹交至办公室门口处的桌上并等待揽收。' }
];

const sealSteps = [
  { title: '进入系统', desc: '打开企业微信 -> 工作台 -> 柚协同 -> 我的协同 -> 我的新建。', imgSrc: '/images/regularwork/OA_seal-step1.png' },
  { title: '创建申请', desc: '找到“法务部”专区，点击“用印申请单”进入创建界面。', imgSrc: '/images/regularwork/OA_seal-step2.png' },
  { title: '填写信息', desc: '按需填写证章名称、证章所属公司、是否外带以及证章是否需要加盖公章，并在“外发内容”处上传附件。', note: '常用信息为公章、浙江柚香谷控股股份有限公司、不外带、证章不需要加盖公章。', imgSrc: '/images/regularwork/OA_seal-step3.png' },
  { title: '提交申请', desc: '信息确认无误后点击界面右上角的“提交”按钮，完成用印的申请。' },
  { title: '结果示例', desc: '提交成功后的申请单详情示例。', imgSrc: '/images/regularwork/OA_seal-result.png' }
];

const guestSteps = [
  { title: '进入系统', desc: '打开企业微信 -> 工作台 -> 柚协同 -> 我的协同 -> 我的新建。', imgSrc: '/images/regularwork/OA_guest-step1.png' },
  { title: '创建申请', desc: '找到“采购管理”专区，点击“客情样品福利领用申请单”进入创建界面。', imgSrc: '/images/regularwork/OA_guest-step2.png' },
  { title: '填写信息', desc: '按需填写“基础信息”空白处，并在”库存产品信息“中选择相应的商品。', note: '在选择产品时，如若对象为成品，可在“存货一级”处输入“成品”再进行检索，产成品的存货编码为1开头的数字。', imgSrc: ['/images/regularwork/OA_guest-step3(1).png', '/images/regularwork/OA_guest-step3(2).png'] },
  { title: '提交申请', desc: '所有信息确认无误后点击界面右上角的“提交”按钮，完成客情申请。' },
  { title: '结果示例', desc: '提交成功后的申请单详情示例。', imgSrc: '/images/regularwork/OA_guest-result.png' }
];

const itemSteps = [
  { title: '进入系统', desc: '打开企业微信 -> 工作台 -> 柚协同 -> 我的协同 -> 我的新建。', imgSrc: '/images/regularwork/OA_item-step1.png' },
  { title: '创建申请', desc: '找到“采购管理”专区，点击“物品请购申请单”进入创建界面。', imgSrc: '/images/regularwork/OA_item-step2.png' },
  { title: '填写信息', desc: '在“基础信息”一栏中填写所在公司、申请类别、请购原因，并按需在“物品信息”一栏中填写相应的信息。' },
  { title: '提交申请', desc: '所有信息确认无误后点击界面右上角的“提交”按钮，完成物品请购申请。' },
  { title: '结果示例', desc: '提交成功后的申请单详情示例。', imgSrc: '/images/regularwork/OA_item-result.png' }
];

const meetingSteps = [
  { title: '入口', desc: '打开企业微信 -> 工作台 -> 柚通用 -> 会议。' },
  { title: '预定', desc: '点击“预定会议”，选择参会人、开始时间、时长。' },
  { title: '筛选', desc: '根据人数选择合适的会议室。' },
  { title: '完成', desc: '填写会议主题，点击“保存会议”完成预定。' }
];

export default function RoutineWork() {
  const [entry, setEntry] = useState(null);
  const [oaTab, setOaTab] = useState('seal');

  return (
    <div className="space-y-6">
      <header className="card bg-gradient-to-r from-yuzu/10 to-transparent border-l-4 border-yuzu">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Workflow className="w-8 h-8 text-yuzu" />
          常规工作
        </h1>
        <p className="text-gray-600 mt-2">在这里快速入门常用工作模块与流程。</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          className="card text-left hover:bg-yellow-50 transition"
          onClick={() => setEntry(entry === 'express' ? null : 'express')}
        >
          <div className="flex items-center gap-3">
            <Package className="w-6 h-6 text-yuzu" />
            <div className="text-lg font-semibold">快递寄出</div>
          </div>
          <div className="text-gray-600 mt-1">使用公司快递单寄件的标准流程。</div>
        </button>
        <button
          className="card text-left hover:bg-emerald-50 transition"
          onClick={() => setEntry(entry === 'oa' ? null : 'oa')}
        >
          <div className="flex items-center gap-3">
            <Workflow className="w-6 h-6 text-fresh" />
            <div className="text-lg font-semibold">OA秘籍</div>
          </div>
          <div className="text-gray-600 mt-1">常见 OA 申请流程与操作说明。</div>
        </button>
        <button
          className="card text-left hover:bg-blue-50 transition"
          onClick={() => setEntry(entry === 'meeting' ? null : 'meeting')}
        >
          <div className="flex items-center gap-3">
            <CalendarClock className="w-6 h-6 text-blue-500" />
            <div className="text-lg font-semibold">会议室预定</div>
          </div>
          <div className="text-gray-600 mt-1">查看会议室预定流程与规范。</div>
        </button>
      </section>

      {entry === 'express' ? (
        <section className="card">
          <h2 className="text-xl font-semibold">利用公司快递单寄件教程</h2>
          <div className="mt-6">
            <VerticalStepper steps={expressSteps} />
          </div>
        </section>
      ) : null}

      {entry === 'oa' ? (
        <section className="card">
          <h2 className="text-xl font-semibold">OA Workflows</h2>
          <div className="mt-4 flex gap-3">
            <button
              className={`btn ${oaTab === 'seal' ? 'btn-secondary' : ''}`}
              onClick={() => setOaTab('seal')}
            >
              用印申请
            </button>
            <button
              className={`btn ${oaTab === 'guest' ? 'btn-secondary' : ''}`}
              onClick={() => setOaTab('guest')}
            >
              客情申请
            </button>
            <button
              className={`btn ${oaTab === 'item' ? 'btn-secondary' : ''}`}
              onClick={() => setOaTab('item')}
            >
              物品请购
            </button>
          </div>
          <div className="mt-6">
            {oaTab === 'seal' ? <VerticalStepper steps={sealSteps} /> : null}
            {oaTab === 'guest' ? <VerticalStepper steps={guestSteps} /> : null}
            {oaTab === 'item' ? <VerticalStepper steps={itemSteps} /> : null}
          </div>
        </section>
      ) : null}

      {entry === 'meeting' ? (
        <section className="card">
          <h2 className="text-xl font-semibold">会议室预定流程</h2>
          <div className="mt-6">
            <VerticalStepper steps={meetingSteps} />
          </div>
        </section>
      ) : null}
    </div>
  );
}
