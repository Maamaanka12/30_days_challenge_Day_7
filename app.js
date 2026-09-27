const params = new URLSearchParams(location.search);
const grid = document.getElementById('courseGrid');
const chips = [...document.querySelectorAll('.chip')];
const status = document.getElementById('courseStatus');
function setFilter(f, push){
  chips.forEach(c=>c.setAttribute('aria-pressed', String(c.dataset.filter===f)));
  let n=0,total=0;
  grid.querySelectorAll('.course').forEach(a=>{total++;const show=f==='all'||a.dataset.dept===f;a.style.display=show?'':'none';if(show)n++;});
  status.textContent = `Showing ${new Intl.NumberFormat('en-US').format(n)} of ${new Intl.NumberFormat('en-US').format(total)} courses.`;
  if(push){const u=new URL(location.href);if(f==='all')u.searchParams.delete('dept');else u.searchParams.set('dept',f);history.replaceState(null,'',u);}
}
chips.forEach(c=>c.addEventListener('click',()=>setFilter(c.dataset.filter,true)));
setFilter(params.get('dept')||'all',false);

// Teachers
const q=document.getElementById('q'),dept=document.getElementById('dept'),tg=document.getElementById('teacherGrid'),ts=document.getElementById('teacherStatus');
if(params.get('q'))q.value=params.get('q');
function runT(){
  const needle=q.value.trim().toLowerCase();let n=0,total=0;
  tg.querySelectorAll('.teacher').forEach(t=>{total++;const ok=(!needle||t.dataset.name.includes(needle))&&(dept.value==='all'||t.dataset.dept===dept.value);t.style.display=ok?'':'none';if(ok)n++;});
  ts.textContent=`Showing ${new Intl.NumberFormat('en-US').format(n)} of ${new Intl.NumberFormat('en-US').format(total)} staff.`;
  const u=new URL(location.href);needle?u.searchParams.set('q',needle):u.searchParams.delete('q');history.replaceState(null,'',u);
}
q.addEventListener('input',runT);dept.addEventListener('change',runT);runT();

// Menu
const btn=document.getElementById('menuBtn'),nav=document.getElementById('siteNav');
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(o));});
nav.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.focus();}});

// Admissions
const af=document.getElementById('applyForm');
af.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('pname'),email=document.getElementById('email'),grade=document.getElementById('grade');
  let firstBad=null;
  const set=(id,msg,el)=>{document.getElementById(id).textContent=msg;if(msg&&!firstBad)firstBad=el;};
  set('err-name',name.value.trim().length<2?'Enter the parent full name.':"",name);
  set('err-email',/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())?'':'Enter a valid email address.',email);
  set('err-grade',grade.value?'':'Select an entry grade.',grade);
  const b=document.getElementById('applyBtn');
  if(firstBad){firstBad.focus();return;}
  b.disabled=true;b.textContent='Sending…';
  setTimeout(()=>{document.getElementById('applyOut').textContent=`Thank you ${name.value.trim()}. We recorded a ${grade.value} application and will reply to ${email.value.trim()} within 5 school days.`;b.disabled=false;b.textContent='Send application';af.reset();},700);
});
window.addEventListener('beforeunload',e=>{
  const dirty=[...af.querySelectorAll('input,select')].some(i=>i.value);
  if(dirty){e.preventDefault();}
});
