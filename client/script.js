
// //아이디 선택자
// const search = document.querySelector('#search'),
//     searchButton = document.querySelector('#searchButton');

// //검색 버튼 클릭하면 실행되는 함수
// search.click(function () {
//     searchButton.submit();
// });

const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

window.addEventListener(
    'click',
    (ev) => {
        const elm = ev.target;
        if (triggers.includes(elm)) {
            const selector = elm.getAttribute('data-target');
            collapse(selector, 'toggle');
        }
    },
    false
);

const fnmap = {
    toggle: 'toggle',
    show: 'add',
    hide: 'remove',
};
const collapse = (selector, cmd) => {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach((target) => {
        target.classList[fnmap[cmd]]('show');
    });
};


document.querySelector('#sign_in').addEventListener('click', function () {
    chrome.runtime.sendMessage({ message: 'get_access_token' }, function (response) {
        if (response.signed_in) {
            document.querySelector('#not_auth').style.display = 'none';
            document.querySelector('#auth').style.display = 'block';
        }
    });

    chrome.runtime.sendMessage({ message: 'get_profile' }, function (response) {
        document.querySelector('#user_email').innerHTML = response.email;
    });
});

//아이디 선택자
const search = document.querySelector("#search"),
    searchButton = document.querySelector("#searchButton");

//검색 버튼 클릭하면 실행되는 함수
search.click(function() {
    searchButton.submit();
})

const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

window.addEventListener('click', (ev) => {
  const elm = ev.target;
  if (triggers.includes(elm)) {
    const selector = elm.getAttribute('data-target');
    collapse(selector, 'toggle');
  }
}, false);

const fnmap = {
  'toggle': 'toggle',
  'show': 'add',
  'hide': 'remove'
};
const collapse = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach(target => {
    target.classList[fnmap[cmd]]('show');
  });
}

