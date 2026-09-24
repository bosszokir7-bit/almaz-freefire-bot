export default async function handler(req, res) {
  const APP_KEY = 'fc_21f5712e9156572137bdf68d';
  const { uid } = req.query;
  if (!uid) return res.status(400).json({ error: 'UID лозим' });
  try {
    const r = await fetch('https://fazer.gg/api/v1/check-uid?uid='+uid, {
      headers: { 'X-App-Key': APP_KEY, 'Authorization': 'Bearer '+APP_KEY }
    });
    const data = await r.json();
    if (data && data.nickname) return res.status(200).json({ success:true, uid, nickname:data.nickname });
    return res.status(200).json({ success:true, uid, nickname:'FF Player '+uid.slice(-4) });
  } catch(e){
    return res.status(200).json({ success:true, uid, nickname:'Player '+uid.slice(-4) });
  }
}
