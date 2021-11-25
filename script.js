const mainTeacherBlock = document.createElement('div');
mainTeacherBlock.id = 'mainpopupDiv';
mainTeacherBlock.className = 'mainpopupBloc';
document.body.appendChild(mainTeacherBlock);

const popupBlock = document.createElement('div');
popupBlock.id = 'popupDiv';
popupBlock.className = 'popupBloc';
mainTeacherBlock.appendChild(popupBlock);

const title = document.createElement('h3');
title.id = 'titlePop';
title.className = 'titlepop';
title.textContent = 'Meet Our Teachers';
popupBlock.appendChild(title);

const linex = document.createElement('span');
linex.id = 'line';
linex.className = 'lineclass';
popupBlock.appendChild(linex);

const closepopupBlock = document.createElement('div');
closepopupBlock.id = 'closepopupDiv';
closepopupBlock.className = 'closepopupBloc';
popupBlock.appendChild(closepopupBlock);

const popupimgtextBlock = document.createElement('div');
popupimgtextBlock.id = 'popuptextDiv';
popupimgtextBlock.className = 'popuptextBloc';
closepopupBlock.appendChild(popupimgtextBlock);

const teacherBlock1 = document.createElement('div');
teacherBlock1.id = 'teacher1';
teacherBlock1.className = 'teacherclass1';
popupimgtextBlock.appendChild(teacherBlock1);

const imageteacher1 = document.createElement('img');
imageteacher1.id = 'imageteacherid1';
imageteacher1.className = 'imageteachid3';
imageteacher1.src = 'pictures/miamob.png';
teacherBlock1.appendChild(imageteacher1);

const teacherTextBlock1 = document.createElement('div');
teacherTextBlock1.id = 'teachertextblock';
teacherTextBlock1.className = 'teachertexbloo';
teacherBlock1.appendChild(teacherTextBlock1);

const textTeacherTitle = document.createElement('p');
textTeacherTitle.className = 'textTeachid1';
textTeacherTitle.textContent = 'Mia Brown';
teacherTextBlock1.appendChild(textTeacherTitle);

const textitle = document.createElement('p');
textitle.className = 'textTeachidx';
textitle.textContent = 'Certified English Teacher with 5 years of teaching experience';
teacherTextBlock1.appendChild(textitle);

const linespan = document.createElement('span');
linespan.id = 'lineid';
linespan.className = 'linecla1';
teacherTextBlock1.appendChild(linespan);

const textTeacherTitle1 = document.createElement('p');
textTeacherTitle1.className = 'textTeachid2';
textTeacherTitle1.textContent = 'I speak 7 languages to various degrees of fluency. I believe I can use my own language learning experience to help you achieve your language goals.';
teacherTextBlock1.appendChild(textTeacherTitle1);

const teacherBlock2 = document.createElement('div');
teacherBlock2.id = 'teacher2';
teacherBlock2.className = 'teacherclass1';
popupimgtextBlock.appendChild(teacherBlock2);

const imageteacher2 = document.createElement('img');
imageteacher2.className = 'imageteachid3';
imageteacher2.src = 'pictures/robertmo.png';
teacherBlock2.appendChild(imageteacher2);

const blocteacher = document.createElement('div');
blocteacher.id = 'blocteacherId';
blocteacher.className = 'teachertexbloo';
teacherBlock2.appendChild(blocteacher);

const blockSecTitle = document.createElement('p');
blockSecTitle.className = 'textTeachid1';
blockSecTitle.textContent = 'Robert Miller';
blocteacher.appendChild(blockSecTitle);

const textitle1 = document.createElement('p');
textitle1.className = 'textTeachidx';
textitle1.textContent = 'Certified English Teacher with 10 years of teaching experience';
blocteacher.appendChild(textitle1);

const linespan1 = document.createElement('span');
linespan1.id = 'lineid1';
linespan1.className = 'linecla1';
blocteacher.appendChild(linespan1);

const blockThirdTitle = document.createElement('p');
blockThirdTitle.className = 'textTeachid2';
blockThirdTitle.textContent = "Hi! I'm Robert. I am a native English speaker from the United States who specializes in teaching Business English, Accent Reduction, GMAT testing, and admissions prep. I teach both classroom and online lessons. I like to make my lessons fun and tailored to my students. You can choose any topics.";
blocteacher.appendChild(blockThirdTitle);

const teacherBlock3 = document.createElement('div');
teacherBlock3.id = 'teacher3';
teacherBlock3.className = 'teacherclass1';
popupimgtextBlock.appendChild(teacherBlock3);

const imageteacher3 = document.createElement('img');
imageteacher3.className = 'imageteachid3';
imageteacher3.src = 'pictures/Sans-tit.png';
teacherBlock3.appendChild(imageteacher3);

const textBlock2 = document.createElement('div');
textBlock2.id = 'teachertextblock';
textBlock2.className = 'teachertexbloo';
teacherBlock3.appendChild(textBlock2);

const textTitle3 = document.createElement('p');
textTitle3.className = 'textTeachid1';
textTitle3.textContent = 'Clara Garcia';
textBlock2.appendChild(textTitle3);

const textitle2 = document.createElement('p');
textitle2.className = 'textTeachidx';
textitle2.textContent = 'Certified English Teacher with 8 years of teaching experience';
textBlock2.appendChild(textitle2);

const linespan2 = document.createElement('span');
linespan2.id = 'lineid2';
linespan2.className = 'linecla1';
textBlock2.appendChild(linespan2);

const textTitle4 = document.createElement('p');
textTitle4.className = 'textTeachid2';
textTitle4.textContent = 'I am ready to start working with you as soon as you are ready. I have a very flexible schedule and over 20 years experience, teaching English and training English teachers.';
textBlock2.appendChild(textTitle4);

const popupimgtext = document.createElement('div');
popupimgtext.id = 'popuptextdi';
popupimgtext.className = 'popuptextBl';
closepopupBlock.appendChild(popupimgtext);

const teacherBlock4 = document.createElement('div');
teacherBlock4.id = 'teacherid4';
teacherBlock4.className = 'teacherclass2';
popupimgtext.appendChild(teacherBlock4);

const imageteacher4 = document.createElement('img');
imageteacher4.className = 'imageteachid3';
imageteacher4.src = 'pictures/willmob.png';
teacherBlock4.appendChild(imageteacher4);

const textBlocks3 = document.createElement('div');
textBlocks3.id = 'textBlocksid';
textBlocks3.className = 'teachertexbloo';
teacherBlock4.appendChild(textBlocks3);

const textTeacher4 = document.createElement('p');
textTeacher4.className = 'textTeachid1';
textTeacher4.textContent = 'Pavel Davis';
textBlocks3.appendChild(textTeacher4);

const textitle4 = document.createElement('p');
textitle4.className = 'textTeachidx';
textitle4.textContent = 'Certified English Teacher with 4 years of teaching experience';
textBlocks3.appendChild(textitle4);

const linespan3 = document.createElement('span');
linespan3.id = 'lineid3';
linespan3.className = 'linecla1';
textBlocks3.appendChild(linespan3);

const textfirstTeacher = document.createElement('p');
textfirstTeacher.className = 'textTeachid2';
textfirstTeacher.textContent = 'I am a fully qualified ESL Teacher with a friendly and patient personality. Teaching English is a passion of mine and I am extremely excited to start classes with you.';
textBlocks3.appendChild(textfirstTeacher);

const teacherBlock5 = document.createElement('div');
teacherBlock5.id = 'teacherid5';
teacherBlock5.className = 'teacherclass2';
popupimgtext.appendChild(teacherBlock5);

const imageteacher5 = document.createElement('img');
imageteacher5.className = 'imageteachid3';
imageteacher5.src = 'pictures/lastmob.png';
teacherBlock5.appendChild(imageteacher5);

const textBlocks4 = document.createElement('div');
textBlocks4.id = 'textBlocksid4';
textBlocks4.className = 'teachertexbloo';
teacherBlock5.appendChild(textBlocks4);

const textTeacher5 = document.createElement('p');
textTeacher5.className = 'textTeachid1';
textTeacher5.textContent = 'Maxim Jones';
textBlocks4.appendChild(textTeacher5);

const textitle5 = document.createElement('p');
textitle5.className = 'textTeachidx';
textitle5.textContent = 'Certified English Teacher with 5 years of teaching experience';
textBlocks4.appendChild(textitle5);

const linespan4 = document.createElement('span');
linespan4.id = 'lineid4';
linespan4.className = 'linecla1';
textBlocks4.appendChild(linespan4);

const textTeachertitle5 = document.createElement('p');
textTeachertitle5.className = 'textTeachid2';
textTeachertitle5.textContent = 'Hi there! I am a certified and experienced ESL teacher and an adventurous American who has traveled the globe and shared her skills abroad.';
textBlocks4.appendChild(textTeachertitle5);

const teacherBlock6 = document.createElement('div');
teacherBlock6.id = 'teacherid6';
teacherBlock6.className = 'teacherclass2';
popupimgtext.appendChild(teacherBlock6);

const imageteacher6 = document.createElement('img');
imageteacher6.className = 'imageteachid3';
imageteacher6.src = 'pictures/ladymob.png';
teacherBlock6.appendChild(imageteacher6);

const teacherBlockDiv = document.createElement('div');
teacherBlockDiv.id = 'teacherBlockDiv-id';
teacherBlockDiv.className = 'teachertexbloo';
teacherBlock6.appendChild(teacherBlockDiv);

const textTeacher6 = document.createElement('p');
textTeacher6.className = 'textTeachid1';
textTeacher6.textContent = 'William Johnson';
teacherBlockDiv.appendChild(textTeacher6);

const textitlex6 = document.createElement('p');
textitlex6.className = 'textTeachidx';
textitlex6.textContent = 'Certified English Teacher with 7 years of teaching experience';
teacherBlockDiv.appendChild(textitlex6);

const linespan5 = document.createElement('span');
linespan5.id = 'lineid5';
linespan5.className = 'linecla1';
teacherBlockDiv.appendChild(linespan5);

const textTeacher7 = document.createElement('p');
textTeacher7.className = 'textTeachid2';
textTeacher7.textContent = 'I earned my Masters degree in TESOL in 2014 in California, USA and have been working with students around the world ever since.';
teacherBlockDiv.appendChild(textTeacher7);

const hamburger = document.getElementById('ham');
hamburger.addEventListener('click', () => {
  document.getElementById('iconlist').style.width = '100%';
});

const closeNav = document.getElementById('closeNav');
closeNav.addEventListener('click', () => {
  document.getElementById('iconlist').style.display = 'none';
  window.location.reload();
});

const openNavlink = document.getElementById('home');
openNavlink.addEventListener('click', () => {
  document.getElementById('iconlist').style.display = 'none';
  window.location.reload();
});

const openlinkAbout = document.getElementById('about');
openlinkAbout.addEventListener('click', () => {
  document.getElementById('iconlist').style.display = 'none';
  window.location.reload();
});

const openlinkhow = document.getElementById('howit');
openlinkhow.addEventListener('click', () => {
  document.getElementById('iconlist').style.display = 'none';
  window.location.reload();
});

const openlinkTeach = document.getElementById('teacher');
openlinkTeach.addEventListener('click', () => {
  document.getElementById('iconlist').style.display = 'none';
  window.location.reload();
});

const openlinkpart = document.getElementById('partner');
openlinkpart.addEventListener('click', () => {
  document.getElementById('iconlist').style.display = 'none';
  window.location.reload();
});

const openlinkContact = document.getElementById('contact');
openlinkContact.addEventListener('click', () => {
  document.getElementById('iconlist').style.display = 'none';
  window.location.reload();
});

// desktop

const mainTeacherBlockDesk = document.createElement('div');
mainTeacherBlockDesk.id = 'mainpopupDivDesk';
mainTeacherBlockDesk.className = 'mainpopupBlocDesk';
document.body.appendChild(mainTeacherBlockDesk);

const popupBlockDesk = document.createElement('div');
popupBlockDesk.id = 'popupDivDesk';
popupBlockDesk.className = 'popupBlocDesk';
mainTeacherBlockDesk.appendChild(popupBlockDesk);

const titleDesk = document.createElement('h3');
titleDesk.id = 'titlePopDesk';
titleDesk.className = 'titlepopDesk';
titleDesk.textContent = 'Meet Our Teachers';
popupBlockDesk.appendChild(titleDesk);

const linexDesk = document.createElement('span');
linexDesk.id = 'lineDesk';
linexDesk.className = 'lineclassDesk';
popupBlockDesk.appendChild(linexDesk);

const closepopupBlockDesk = document.createElement('div');
closepopupBlockDesk.id = 'closepopupDivDesk';
closepopupBlockDesk.className = 'closepopupBlocDesk';
popupBlockDesk.appendChild(closepopupBlockDesk);

const popupimgtextBlockDesk = document.createElement('div');
popupimgtextBlockDesk.id = 'popuptextDivDesk';
popupimgtextBlockDesk.className = 'class1Desk';
closepopupBlockDesk.appendChild(popupimgtextBlockDesk);

const teacherBlock1Desk = document.createElement('div');
teacherBlock1Desk.id = 'teacher1Desk';
teacherBlock1Desk.className = 'teacherclass1Desk';
popupimgtextBlockDesk.appendChild(teacherBlock1Desk);

const imageteacher1Desk = document.createElement('img');
imageteacher1Desk.id = 'imageteacherid1Desk';
imageteacher1Desk.className = 'imageteachid3Desk';
imageteacher1Desk.src = 'pictures/mia.png';
teacherBlock1Desk.appendChild(imageteacher1Desk);

const teacherTextBlock1Desk = document.createElement('div');
teacherTextBlock1Desk.id = 'teachertextblockDesk';
teacherTextBlock1Desk.className = 'teachertexblooDesk';
teacherBlock1Desk.appendChild(teacherTextBlock1Desk);

const textTeacherTitleDesk = document.createElement('p');
textTeacherTitleDesk.className = 'textTeachid1Desk';
textTeacherTitleDesk.textContent = 'Mia Brown';
teacherTextBlock1Desk.appendChild(textTeacherTitleDesk);

const textitleDesk = document.createElement('p');
textitleDesk.className = 'textTeachidxDesk';
textitleDesk.textContent = 'Certified English Teacher with 5 years of teaching experience';
teacherTextBlock1Desk.appendChild(textitleDesk);

const linespanDesk = document.createElement('span');
linespanDesk.id = 'lineidDesk';
linespanDesk.className = 'linecla1Desk';
teacherTextBlock1Desk.appendChild(linespanDesk);

const textTeacherTitle1Desk = document.createElement('p');
textTeacherTitle1Desk.className = 'textTeachid2Desk';
textTeacherTitle1Desk.textContent = ' I speak 7 languages to various degrees of fluency. I believe I can use my own language learning experience to help you achieve your language goals.';
teacherTextBlock1Desk.appendChild(textTeacherTitle1Desk);

const teacherBlock2Desk = document.createElement('div');
teacherBlock2Desk.id = 'teacher2Desk';
teacherBlock2Desk.className = 'teacherclass2Desk';
popupimgtextBlockDesk.appendChild(teacherBlock2Desk);

const imageteacher2Desk = document.createElement('img');
imageteacher2Desk.className = 'imageteachid3Desk';
imageteacher2Desk.src = 'pictures/robert.png';
teacherBlock2Desk.appendChild(imageteacher2Desk);

const blocteacherDesk = document.createElement('div');
blocteacherDesk.id = 'blocteacherIdDesk';
blocteacherDesk.className = 'teachertexblooDesk';
teacherBlock2Desk.appendChild(blocteacherDesk);

const blockSecTitleDesk = document.createElement('p');
blockSecTitleDesk.className = 'textTeachid1Desk';
blockSecTitleDesk.textContent = 'Robert Miller';
blocteacherDesk.appendChild(blockSecTitleDesk);

const textitle1Desk = document.createElement('p');
textitle1Desk.className = 'textTeachidxDesk certified';
textitle1Desk.textContent = 'Certified English Teacher with 10 years of teaching experience';
blocteacherDesk.appendChild(textitle1Desk);

const linespan1Desk = document.createElement('span');
linespan1Desk.id = 'lineid1Desk';
linespan1Desk.className = 'linecla1Desk deskto';
blocteacherDesk.appendChild(linespan1Desk);

const blockThirdTitleDesk = document.createElement('p');
blockThirdTitleDesk.className = 'textTeachid2Desk';
blockThirdTitleDesk.textContent = "Hi! I'm Robert. I am a native English speaker from the United States who specializes in teaching Business English, Accent Reduction, GMAT testing, and admissions prep. I teach both classroom and online lessons. I like to make my lessons fun and tailored to my students. You can choose any topics.";
blocteacherDesk.appendChild(blockThirdTitleDesk);

const divtextDesk = document.createElement('div');
divtextDesk.id = 'popupimgtextDeskid';
divtextDesk.className = 'class1Desk';
closepopupBlockDesk.appendChild(divtextDesk);

const teacherBlock3Desk = document.createElement('div');
teacherBlock3Desk.id = 'teacher3Desk';
teacherBlock3Desk.className = 'teacherclass1Desk';
divtextDesk.appendChild(teacherBlock3Desk);

const imageteacher3Desk = document.createElement('img');
imageteacher3Desk.className = 'imageteachid3Desk';
imageteacher3Desk.src = 'pictures/Sans-titre.png';
teacherBlock3Desk.appendChild(imageteacher3Desk);

const textBlock2Desk = document.createElement('div');
textBlock2Desk.id = 'teachertextblockDesk';
textBlock2Desk.className = 'teachertexblooDesk';
teacherBlock3Desk.appendChild(textBlock2Desk);

const textTitle3Desk = document.createElement('p');
textTitle3Desk.className = 'textTeachid1Desk';
textTitle3Desk.textContent = 'Clara Garcia';
textBlock2Desk.appendChild(textTitle3Desk);

const textitle2Desk = document.createElement('p');
textitle2Desk.className = 'textTeachidxDesk';
textitle2Desk.textContent = 'Certified English Teacher with 8 years of teaching experience';
textBlock2Desk.appendChild(textitle2Desk);

const linespan2Desk = document.createElement('span');
linespan2Desk.id = 'lineid2Desk';
linespan2Desk.className = 'linecla1Desk';
textBlock2Desk.appendChild(linespan2Desk);

const textTitle4Desk = document.createElement('p');
textTitle4Desk.className = 'textTeachid2Desk';
textTitle4Desk.textContent = 'I am ready to start working with you as soon as you are ready. I have a very flexible schedule and over 20 years experience, teaching English and training English teachers.';
textBlock2Desk.appendChild(textTitle4Desk);

const desktopBlokThird = document.createElement('div');
desktopBlokThird.id = 'desktopBlokThi';
desktopBlokThird.className = 'teacherclass2Desk';
divtextDesk.appendChild(desktopBlokThird);

const image = document.createElement('img');
image.className = 'imageteachid3Desk';
image.src = 'pictures/last.png';
desktopBlokThird.appendChild(image);

const textblockDivs = document.createElement('div');
textblockDivs.id = 'textblockDivs';
textblockDivs.className = 'teachertexblooDesk';
desktopBlokThird.appendChild(textblockDivs);

const teacherBlockThir = document.createElement('p');
teacherBlockThir.className = 'textTeachid1Desk';
teacherBlockThir.textContent = 'Pavel Davis';
textblockDivs.appendChild(teacherBlockThir);

const textitleThird2Desk = document.createElement('p');
textitleThird2Desk.className = 'textTeachidxDesk';
textitleThird2Desk.textContent = 'Certified English Teacher with 4 years of teaching experience';
textblockDivs.appendChild(textitleThird2Desk);

const linespanix2Desk = document.createElement('span');
linespanix2Desk.id = 'lineid2Desk';
linespanix2Desk.className = 'linecla1Desk';
textblockDivs.appendChild(linespanix2Desk);

const featureTeacher = document.createElement('p');
featureTeacher.className = 'textTeachid2Desk';
featureTeacher.textContent = 'I am a fully qualified ESL Teacher with a friendly and patient personality. Teaching English is a passion of mine and I am extremely excited to start classes with you.';
textblockDivs.appendChild(featureTeacher);

const teachblock5Desk = document.createElement('div');
teachblock5Desk.id = 'teacherid5Desk';
teachblock5Desk.className = 'class1Desk';
closepopupBlockDesk.appendChild(teachblock5Desk);

const teacherBlock5Desk = document.createElement('div');
teacherBlock5Desk.id = 'teacherid5Desk';
teacherBlock5Desk.className = 'teacherclass1Desk';
teachblock5Desk.appendChild(teacherBlock5Desk);

const imageteacher5Desk = document.createElement('img');
imageteacher5Desk.className = 'imageteachid3Desk';
imageteacher5Desk.src = 'pictures/last.png';
teacherBlock5Desk.appendChild(imageteacher5Desk);

const textBlocksDesktop = document.createElement('div');
textBlocksDesktop.id = 'textBlocksid4Desk';
textBlocksDesktop.className = 'teachertexblooDesk';
teacherBlock5Desk.appendChild(textBlocksDesktop);

const textTeacher5Desk = document.createElement('p');
textTeacher5Desk.className = 'textTeachid1Desk';
textTeacher5Desk.textContent = 'Maxim Jones';
textBlocksDesktop.appendChild(textTeacher5Desk);

const textitle5Desk = document.createElement('p');
textitle5Desk.className = 'textTeachidxDesk';
textitle5Desk.textContent = 'Certified English Teacher with 5 years of teaching experience';
textBlocksDesktop.appendChild(textitle5Desk);

const linespan4Desk = document.createElement('span');
linespan4Desk.id = 'lineid4Desk';
linespan4Desk.className = 'linecla1Desk';
textBlocksDesktop.appendChild(linespan4Desk);

const textTeachertitle5Desk = document.createElement('p');
textTeachertitle5Desk.className = 'textTeachid2Desk';
textTeachertitle5Desk.textContent = 'Hi there! I am a certified and experienced ESL teacher and an adventurous American who has traveled the globe and shared her skills abroad.';
textBlocksDesktop.appendChild(textTeachertitle5Desk);

const teacherBlock6Desk = document.createElement('div');
teacherBlock6Desk.id = 'teacherid6Desk';
teacherBlock6Desk.className = 'teacherclass2Desk';
teachblock5Desk.appendChild(teacherBlock6Desk);

const imageteacher6Desk = document.createElement('img');
imageteacher6Desk.className = 'imageteachid3Desk';
imageteacher6Desk.src = 'pictures/lady.png';
teacherBlock6Desk.appendChild(imageteacher6Desk);

const teacherBlockDivDesk = document.createElement('div');
teacherBlockDivDesk.id = 'teacherBlockDivDesk-id';
teacherBlockDivDesk.className = 'teachertexblooDesk';
teacherBlock6Desk.appendChild(teacherBlockDivDesk);

const textTeacher6Desk = document.createElement('p');
textTeacher6Desk.className = 'textTeachid1Desk';
textTeacher6Desk.textContent = 'William Johnson';
teacherBlockDivDesk.appendChild(textTeacher6Desk);

const textitlex6Desk = document.createElement('p');
textitlex6Desk.className = 'textTeachidxDesk';
textitlex6Desk.textContent = 'Certified English Teacher with 7 years of teaching experience';
teacherBlockDivDesk.appendChild(textitlex6Desk);

const linespan5Desk = document.createElement('span');
linespan5Desk.id = 'lineid5Desk';
linespan5Desk.className = 'linecla1Desk';
teacherBlockDivDesk.appendChild(linespan5Desk);

const textTeacher7Desk = document.createElement('p');
textTeacher7Desk.className = 'textTeachid2Desk';
textTeacher7Desk.textContent = 'I earned my Masters degree in TESOL in 2014 in California, USA and have been working with students around the world ever since.';
teacherBlockDivDesk.appendChild(textTeacher7Desk);

const partners = document.getElementById('part');
document.body.appendChild(partners);

const footer = document.getElementById('footerid');
document.body.appendChild(footer);

const bodyCol = document.getElementById('bodyh');
bodyCol.onload = function() {
const colorNew = document.getElementById('deskabout');
colorNew.classList.add('newcaolor');
}
