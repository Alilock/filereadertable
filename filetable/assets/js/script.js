let input = document.querySelector('input')
let dropzone = document.querySelector('.dropzone')
let tablebody = document.querySelector('.table tbody')
let table = document.querySelector('.table')
dropzone.addEventListener('dragover', function (e) {
    e.preventDefault();
})
dropzone.addEventListener('drop', function (e) {
    e.preventDefault();
    let files = Array.from(e.dataTransfer.files)
    ShowFile(files)
})
input.addEventListener('change', function (e) {
    let files = Array.from(e.target.files)
    ShowFile(files)
})

function ShowFile(files) {
    if (files.length > 0) {
        table.classList.add('active')
    }
    files.forEach(file => {
        let tr = document.createElement('tr')
        var tdcount = document.createElement('td')
        tdcount.classList.add('number')
        var tdname = document.createElement('td')
        var tdsize = document.createElement('td')
        var tdtype = document.createElement('td')
        var tddelete = document.createElement('td')

        tr.append(tdcount)
        tr.append(tdname)
        tr.append(tdsize)
        tr.append(tdtype)
        tr.append(tddelete)
        tablebody.append(tr)
        tdcount.innerText = tdcount.parentElement.parentElement.childElementCount;

        tdname.innerText = file.name;
        tdsize.innerText = `${(file.size / 1024 / 1024)} mb`
        tdtype.innerText = file.type;
        tddelete.classList.add('btn')
        tddelete.classList.add('btn-danger')
        tddelete.style.width = "100%"
        tddelete.innerText = 'x'
        tddelete.addEventListener('click', function () {
            tddelete.parentElement.remove();

            let rownumb = document.querySelectorAll('.number')
            for (let i = 0; i < rownumb.length; i++) {
                rownumb[i].innerText = i + 1;

            }
            if (rownumb.length == 0) {
                table.classList.remove('active')
            }
        })
    });
}