let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');


const allCardSection = document.getElementById('all-card');


let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';



//total job, interview & rejected calculate
function calculateCount(){
    totalCount.innerText = allCardSection.children.length; //8
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount()

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

//for click handler on all, interview & rejected button 
function toggleStyle(id){
    //narmal vaba jata select thakba sater anusara  bg & text remove korbo
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    //jata dita chi bg & text a add korbo
    allBtn.classList.add('bg-white', 'text-black'); 
    interviewBtn.classList.add('bg-white', 'text-black');
    rejectedBtn.classList.add('bg-white', 'text-black');
    // console.log(id); //click anusara button dorba

    const selected = document.getElementById(id); //jata click hoba sata dorba
    currentStatus = id;
    // console.log(selected);

    //adding blue for current button
    selected.classList.remove('bg-white', 'text-black') //purber add kora ta remove korbo
    selected.classList.add('bg-[#3B82F6]', 'text-white') //finally jata dita chi sata add korbo

    if(id == 'interview-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }else if(id == 'all-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }else if(id == 'rejected-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
}

const mainContainer = document.querySelector('main');

mainContainer.addEventListener('click', function(event){

    if(event.target.classList.contains('btn-interview')){

        const parentNode = event.target.parentNode.parentNode;
        
        const jobName = parentNode.querySelector('.job-name').innerText;
        const positionName = parentNode.querySelector('.position-name').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const notBtn = parentNode.querySelector('.not-btn').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.not-btn').innerText = 'INTERVIEW';
        
        const cardInfo = {
            jobName,
            positionName,
            salary,
            notBtn:'INTERVIEW',
            description
        }
        
        const jobExist = interviewList.find(item=> item.jobName == cardInfo.jobName);

        if(!jobExist){
        interviewList.push(cardInfo);
        } 

        rejectedList = rejectedList.filter(item=> item.jobName != cardInfo.jobName);

        if(currentStatus == 'interview-btn'){
            renderInterview();
        }

        if(currentStatus == 'rejected-btn'){
            renderRejected();
        }
        calculateCount();


        }else if(event.target.classList.contains('btn-rejected')){

        const parentNode = event.target.parentNode.parentNode;

        const jobName = parentNode.querySelector('.job-name').innerText;
        const positionName = parentNode.querySelector('.position-name').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const notBtn = parentNode.querySelector('.not-btn').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.not-btn').innerText = 'REJECTED';
        
        const cardInfo = {
            jobName,
            positionName,
            salary,
            notBtn:'REJECTED',
            description
        }
        
        const jobExist = rejectedList.find(item=> item.jobName == cardInfo.jobName);
        
        if(!jobExist){
        rejectedList.push(cardInfo);
        } 

        interviewList = interviewList.filter(item=> item.jobName != cardInfo.jobName);

        if(currentStatus == 'rejected-btn'){
            renderRejected();
        }

        if(currentStatus == 'interview-btn'){
            renderInterview();
        }
        calculateCount();

        }
})

const filterSection = document.getElementById('filtered-section');

function renderInterview(){
    filterSection.innerHTML = '';

    for(let inter of interviewList){
        console.log(inter);
        let div = document.createElement('div');
        div.className = 'space-y-3 p-4 bg-[#FFFFFF] rounded-md mb-5'
        div.innerHTML = `
        <div class="flex justify-between items-center">
                <div>
                    <h3 class="job-name font-bold">${inter.jobName}</h3>
                    <p class="position-name text-gray">React Native Developer</p>
                </div>
                <div>
                    <a class="border border-gray-200 rounded-full p-1" href=""><i class="fa-regular fa-trash-can"></i></a>
                </div>
            </div>
            <p class="salary text-gray">Remote • Full-time • $130,000 - $175,000</p>
            <button class="not-btn btn bg-slate-200">${inter.notBtn}</button>
            <p class="description text-gray">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
            <div class="flex gap-4">
                <button class="btn-interview btn text-green-500 border-2 border-green-500">INTERVIEW</button>
                <button class="btn-rejected btn text-red-500 border-2 border-red-500">REJECTED</button>
        </div>
        `
        filterSection.appendChild(div)
    }
}


function renderRejected(){
    filterSection.innerHTML = '';

    for(let reject of rejectedList){
        console.log(reject);
        let div = document.createElement('div');
        div.className = 'space-y-3 p-4 bg-[#FFFFFF] rounded-md mb-5'
        div.innerHTML = `
        <div class="flex justify-between items-center">
                <div>
                    <h3 class="job-name font-bold">${reject.jobName}</h3>
                    <p class="position-name text-gray">React Native Developer</p>
                </div>
                <div>
                    <a class="border border-gray-200 rounded-full p-1" href=""><i class="fa-regular fa-trash-can"></i></a>
                </div>
            </div>
            <p class="salary text-gray">Remote • Full-time • $130,000 - $175,000</p>
            <button class="not-btn btn bg-slate-200">${reject.notBtn}</button>
            <p class="description text-gray">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
            <div class="flex gap-4">
                <button class="btn-interview btn text-green-500 border-2 border-green-500">INTERVIEW</button>
                <button class="btn-rejected btn text-red-500 border-2 border-red-500">REJECTED</button>
        </div>
        `
        filterSection.appendChild(div)
    }
}
