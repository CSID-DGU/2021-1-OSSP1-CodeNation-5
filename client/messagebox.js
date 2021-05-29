var result = function processText() {
    var txtBox = document.getElementById('inputbox');
    var lines = txtBox.value.split('\n');

    // generate HTML version of text
    var resultString = '<p>';
    for (var i = 0; i < lines.length; i++) {
        resultString += lines[i] + '<br />';
    }
    resultString += '</p>'; //resultString을 검색어로 사용할 예정
};
window.onload = function () {
    document.getElementById('btn_bot').onclick = processText; //봇버튼 클릭하면 함수 실행
};

async () => {
    const res = await fetch('/api/search/keyword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => console.log(result));
};
