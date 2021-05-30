window.onload = function () {
    document.getElementById('bot').onclick = processText;
};

var button = document.querySelector('button');

function processText() {
    var txtBox = document.getElementById('inputbox');
    var listBtn = document.createElement('button');
    var div = document.createElement('div');
    var blk = document.getElementById('result');
    var lines = txtBox.value.split('\n');

    // generate HTML version of text
    var resultString = '';
    for (var i = 0; i < lines.length; i++) {
        resultString += lines[i] + '<br />';
    }

    var list1 = ['사과즙', '사과 그림', '청송사과', '얼음골 사과', '산지에 사과', '사과나무', '홍로 사과', '세척 사과', '충주 사과'];
    var list2 = ['생딸기', '딸기 과일', '딸기 사진', '딸기밭', '딸기 제철', '딸기 농장', '딸기 이미지', '딸기 농장', '딸기 채소'];
    var list3 = ['타트체리', '체리 묘목', '체리나무', '국내산 체리', '카드캡터 체리', '레이니어 체리', '켈리포니아 체리', '냉동체리'];
    var list4 = ['코딩 교육', '코딩이란', '코딩 자격증', '코딩 수업', '코딩 로봇', '스크래치', '코딩이란', '코딩 지도사', '코딩 교구'];

    if (resultString == '사과') {
        for (var i = 0; i < list.length; i++) {
            div.appendChild(listBtn);
            listBtn.textContent = list1[i];
        }
    }

    if (resultString == '딸기') {
        for (var i = 0; i < list.length; i++) {
            div.appendChild(listBtn);
            listBtn.textContent = list2[i];
        }
    }

    if (resultString == '체리') {
        for (var i = 0; i < list.length; i++) {
            div.appendChild(listBtn);
            listBtn.textContent = list3[i];
        }
    }

    if (resultString == '코딩') {
        for (var i = 0; i < list.length; i++) {
            div.appendChild(listBtn);
            listBtn.textContent = list4[i];
        }
    }

    blk.appendChild(div);
    // print out to page
    blk.innerHTML = resultString;
    console.log(resultString);
}
