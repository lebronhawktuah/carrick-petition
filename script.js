const URL = 'https://yibxzgvirmkryqurnvxq.supabase.co';
const KEY = 'sb_publishable_S79b2G7PSbbBJRUaKI5b8g_quXdiz2S';
const sb = supabase.createClient(URL, KEY);

async function refresh() {
    const { count } = await sb.from('votes').select('*', { count: 'exact', head: true });
    document.getElementById('count').innerText = count.toLocaleString();
    let p = (count / 150000) * 100;
    document.getElementById('fill').style.width = p + "%";
    document.getElementById('per').innerText = p.toFixed(2);
}

if(localStorage.getItem('signed')) {
    document.getElementById('sign-btn').innerText = "YOU'VE ALREADY SIGNED";
    document.getElementById('sign-btn').disabled = true;
}

document.getElementById('sign-btn').onclick = async () => {
    await sb.from('votes').insert([{}]);
    localStorage.setItem('signed', 'true');
    location.reload();
}

setInterval(refresh, 2000);
refresh();
