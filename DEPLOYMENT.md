# 域名配置与网址修改指南 (Production URL Guide)

本指南旨在帮助您将柚香谷实习生入职指南项目部署到线上并绑定自定义域名。

## 1. 托管平台选择 (Hosting Platform)
推荐使用 **Vercel** 或 **Netlify**，本项目已预配置了 `vercel.json`，因此在 Vercel 上部署最为便捷。

### 在 Vercel 上部署
1.  **注册/登录**: 访问 [vercel.com](https://vercel.com/) 并使用 GitHub/GitLab/Bitbucket 账号登录。
2.  **导入项目**:
    - 点击 **Add New...** -> **Project**。
    - 选择包含本项目代码的 Git 仓库并点击 **Import**。
    - 在 **Framework Preset** 中，Vercel 会自动识别为 `Vite`。
    - 点击 **Deploy**。
3.  **获取默认网址**: 部署完成后，Vercel 会分配一个默认网址，例如 `yxg-guide.vercel.app`。

## 2. 绑定自定义域名 (Custom Domain)
如果您想使用如 `guide.youxianggu.com` 或 `yxg-intern.com` 这样的自定义网址，请按照以下步骤操作：

### 第一步：在 Vercel 中添加域名
1.  进入 Vercel 项目控制台。
2.  点击 **Settings** -> **Domains**。
3.  在输入框中填入您拥有的域名（例如 `guide.youxianggu.com`），点击 **Add**。
4.  Vercel 会显示所需的 DNS 记录（通常是 `CNAME` 或 `A` 记录）。

### 第二步：配置 DNS 解析
1.  登录您的域名注册商（如阿里云、腾讯云、GoDaddy、Namecheap 等）。
2.  找到 **DNS 解析设置** (DNS Management)。
3.  添加一条记录：
    - **类型 (Type)**: `CNAME` (如果使用子域名) 或 `A` (如果使用根域名)。
    - **主机记录 (Name/Host)**: 例如 `guide` (对应 `guide.youxianggu.com`) 或 `@` (对应根域名)。
    - **记录值 (Value/Target)**: 填入 Vercel 提供的地址（通常是 `cname.vercel-dns.com`）。
4.  保存设置。

### 第三步：验证与生效
- 返回 Vercel 控制台，等待 DNS 验证通过（通常几分钟内，最长可能需 24 小时）。
- 验证成功后，访问您的自定义域名即可看到网站。

## 3. 修改本地开发端口 (Local Port)
如果您只是想修改本地开发时的网址（例如从 `localhost:5173` 改为 `localhost:3000`），请修改项目根目录下的 `vite.config.js` 文件：

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 修改为您想要的端口号
    open: true, // 启动时自动打开浏览器
    host: true
  }
});
```

## 4. 常见问题 (FAQ)
- **Q: 为什么修改了 `package.json` 中的 `name` 网址没变？**
  - A: `package.json` 中的 `name` 仅用于项目内部标识，不影响对外访问的 URL。
- **Q: 我可以免费获得自定义域名吗？**
  - A: 通常顶级域名（如 .com, .cn）需要购买。Vercel 提供的 `*.vercel.app` 二级域名是免费的。

如有其他疑问，请联系 IT 部门或查阅相关云服务商文档。
