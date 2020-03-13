const INPUT_FILE = document.getElementById('file-input');
const FILES_BLOCK = document.querySelector('.files-block');
const FILES_TABLE = document.querySelector('.files-table');
const ROW = document.querySelector('#row-example');

INPUT_FILE.addEventListener('change', filesInputHandle);

function filesInputHandle() {
  let files = this.files;

  if (files.length) {
    renderFilesTable(files);
    FILES_BLOCK.classList.remove('visually-hidden');
  } else {
    FILES_BLOCK.classList.add('visually-hidden');
  }
}

function renderFilesTable(filesList) {
  let amountOfFiles = filesList.length;
  let fragment = new DocumentFragment();

  for (let i = 0; i < amountOfFiles; i++) {
    let rowCopy = ROW.cloneNode(true);
    rowCopy.classList.remove('visually-hidden');

    let name = rowCopy.querySelector('.file-name');
    name.innerHTML = filesList[i].name;

    let size = rowCopy.querySelector('.file-size');
    size.innerHTML = filesList[i].size / 1000 + 'kb';

    let words = rowCopy.querySelector('.file-words');
    words.innerHTML = Math.floor(Math.random() * (2000 - 20) + 20);

    rowCopy.addEventListener('click', removeHandle);

    fragment.append(rowCopy);
  }

  FILES_TABLE.append(fragment);
}

function removeHandle() {
  if (event.target.classList.contains('remove-button'))
    event.currentTarget.remove();
  if (FILES_TABLE.childElementCount < 2)
    FILES_BLOCK.classList.add('visually-hidden');
}
