function tabuada() {
    var num = document.getElementById('txtn') 
    var tabad = document.getElementById('taba')
    var tabsu = document.getElementById('tabs')
    var tabmu = document.getElementById('tabm')
    var tabdi = document.getElementById('tabd')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tabad.innerHTML = ''
        tabsu.innerHTML = ''
        tabmu.innerHTML = ''
        tabdi.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option') 
            item.text = `${n} + ${c} = ${n+c}`
            item.value = `tabad${c}`
            tabad.appendChild(item)
            var item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}`
            item.value = `tabsu${c}`
            tabsu.appendChild(item)
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabmu${c}`
            tabmu.appendChild(item)
            var item = document.createElement('option')
            item.text = `${n} / ${c} = ${n/c}`
            item.value = `tabdi${c}`
            tabdi.appendChild(item)
         
        }
    } 
}