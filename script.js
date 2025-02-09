let incarr= [] ; 
let incPreCat= document.querySelector(".category-input-pre" ) ; 
let incPreCarr= incPreCat.children ; 
let incNewCat= document.querySelector(".input-category-n" ) ; 
let incNewAmo= document.querySelector(".input-amount-category-n") ; 
let incNewBtn= document.querySelector(".apply-category-n" ) ; 
let messageNewCat= document.querySelector(".category-display-message" ) ; 
let incomeTable= document.querySelector(".income-table-a" ) ; 
let messageCat= document.querySelector(".enter-income-category" ) ; 
let messageInc= document.querySelector(".enter-income-input" ) ; 
let delIn= document.querySelector(".delete-inc" ) ; 
let delBtn= document.querySelector(".delete-category-inc" ) ; 
let amountAlertDisplay= document.querySelector(".amount-less-category" ) ; 
let amountDecMes= document.querySelector(".amount-decrease" ) ; 
let incsum= 0 ; 
let allIncome= document.querySelector(".total-inc" ) ; 
let allExp= document.querySelector(".total-exp" ) ; 
let balanceAll= document.querySelector(".balance-all" ) ; 
let expSumInc= 0 ; 
for(let i= 0 ; i< localStorage.length ; ++i ) 
{ 
    let s= localStorage.key(i ) ; 
    if(s.slice(0, 4 )== "inc-" ) 
    { 
        let inm= incarr.length+ 1 ; 
        let can= s.slice(4, s.length ) ; 
        let anp= localStorage.getItem(s ) ; 
        let incta= document.querySelector(".income-table" ) ; 
        let ro1= document.createElement("tr" ) ; 
        let sta= document.createElement("td" ) ; 
        let stb= document.createElement("td" ) ; 
        let stc= document.createElement("td" ) ; 
        let opa= document.createElement("option" ) ; 
        let opb= document.createElement("option" ) ; 
        sta.innerText= inm ; 
        stb.innerText= can ; 
        stc.innerText= anp ; 
        ro1.appendChild(sta ) ; 
        ro1.appendChild(stb ) ; 
        ro1.appendChild(stc ) ; 
        incta.appendChild(ro1 ) ; 
        opa.innerText= can ; 
        opa.value= can ; 
        opb.innerText= can ; 
        opb.value= can ; 
        incarr.push([sta, stb, stc, opa, opb ] ) ; 
        incsum= incsum+ parseInt(stc.innerText ) ; 
        allIncome.innerText= "Total Income: $ "+ incsum+ " " ; 
        total(incsum, expSumInc ) ; 
        if(incarr.length> 0 ) 
        { 
            incomeTable.style.display= "initial" ; 
        } 
        incPreCat.appendChild(opa ) ; 
        delIn.appendChild(opb ) ; 
    } 
} 
console.log(incarr ) ; 
incPreCat.addEventListener("click", function(e ) 
{ 
    if(incPreCat.value!= "Choose" ) 
    { 
        messageInc.style.display= "none" ; 
        messageCat.style.display= "none" ; 
        incNewCat.value= "" ; 
    } 
} ) 
incNewCat.addEventListener("input", function(e) 
{ 
    if(incNewCat.value!= "" ) 
    { 
        messageInc.style.display= "none" ; 
        messageCat.style.display= "none" ; 
        incPreCat.children[0].selected= true ; 
        if(messageNewCat.style.display!= "none" ) 
        { 
            messageNewCat.style.display= "none" ; 
        } 
    } 
} ) 
incNewAmo.addEventListener("input", function(e ) 
{ 
    messageInc.style.display= "none" ; 
    if(amountAlertDisplay.style.display== "initial" && incNewAmo.value>= 0 ) 
    { 
        amountAlertDisplay.style.display= "none" ; 
    } 
} ) 
incNewBtn.addEventListener("click", function(e ) 
{ 
    let spc= 0 ; 
    incNewCat.value= incNewCat.value.trim() ; 
    console.log(incNewCat.value ) ; 
    if(((incNewCat.value== "" || spc== (incPreCat.value.length ) ) && incPreCat.value== "Choose" ) || incNewAmo.value== "" ) 
    { 
        if(incNewAmo.value== "" ) 
        { 
            messageInc.style.display= "initial" ; 
        } 
        else 
        { 
            messageCat.style.display= "initial" ; 
        } 
        setTimeout(()=> 
        { 
            messageInc.style.display= "none" ; 
            messageCat.style.display= "none" ; 
        }, 5000 ) ; 
        return ; 
    } 
    let c= 0 ; 
    incarr.forEach((ele )=> 
    { 
        if(ele[1].innerText== incNewCat.value ) 
        { 
            console.log(ele[1] ) ; 
            c++ ; 
            messageNewCat.style.display= "initial" ; 
            return ; 
        } 
        console.log(ele[1].innerText, incPreCat.innerText ) ; 
        if(ele[1].innerText== incPreCat.value ) 
        { 
            if((parseInt(ele[2].innerText )+ parseInt(incNewAmo.value ) )<= 0 ) 
            { 
                amountDecMes.style.display= "initial" ; 
                setTimeout(()=> 
                { 
                    amountDecMes.style.display= "none" ; 
                }, 8000 ) ; 
                c++ ; 
                return ; 
            } 
            ele[2].innerText= parseInt(ele[2].innerText )+ parseInt(incNewAmo.value ) ; 
            console.log("inc-"+ ele[1].innerText ) ; 
            localStorage.setItem(("inc-"+ ele[1].innerText ), ele[2].innerText ) ; 
            incsum= incsum+ parseInt(incNewAmo.value ) ; 
            console.log(localStorage ) ; 
            c++ ; 
            window.location.reload(true ) ; 
            return ; 
        } 
    } ) ; 
    if(c> 0 ) 
    { 
        return ; 
    } 
    if(incNewAmo.value< 0 ) 
    { 
        amountAlertDisplay.style.display= "initial" ; 
        return ; 
    } 
    let inctb= document.querySelector(".income-table" ) ; 
    let row= document.createElement("tr" ) ; 
    let td1= document.createElement("td" ) ; 
    let td2= document.createElement("td" ) ; 
    let td3= document.createElement("td" ) ; 
    td1.innerText= incarr.length+ 1 ; 
    td2.innerText= incNewCat.value ; 
    td3.innerText= incNewAmo.value ; 
    td2.value= td1.innerText ; 
    row.appendChild(td1 ) ; 
    row.appendChild(td2 ) ; 
    row.appendChild(td3 ) ; 
    row.classList.add("tb"+ (incarr.length+ 1 ) ) ; 
    inctb.appendChild(row ) ; 
    let op1= document.createElement("option" ) ; 
    op1.innerText= incNewCat.value ; 
    op1.value= incNewCat.value ; 
    let op2= document.createElement("option" ) ; 
    op2.innerText= incNewCat.value ; 
    op2.value= incNewCat.value ; 
    console.log(op1 ) ; 
    incPreCat.appendChild(op2 ) ; 
    console.log(incPreCat ) ; 
    delIn.appendChild(op1 ) ; 
    incsum= incsum+ parseInt(incNewAmo.value ) ; 
    localStorage.setItem("inc-"+ td2.innerText, td3.innerText ) ; 
    allIncome.innerHTML=`Total Income: $ ${incsum}` ; 
    console.log(localStorage ) ; 
    total(incsum,expSumInc) ; 
    console.log(delIn ) ; 
    incarr.push([td1, td2, td3, op1, op2 ] ) ; 
    if(incarr.length> 0 ) 
    { 
        incomeTable.style.display= "initial" ; 
    } 
    incPreCat.children[0].selected= true ; 
    incNewCat.value= "" ; 
    incNewAmo.value= "" ; 
    window.location.reload(true ) ; 
} ) 
delBtn.addEventListener("click", del ) ; 
function del(e)  
{ 
    if(delIn.value== "Choose" ) 
    { 
        return ; 
    } 
    for(let i= 0 ; i< (incarr.length ) ; ++i ) 
    { 
        if(incarr[i][1].innerText== delIn.value ) 
        { 
            incsum= incsum- parseInt(incarr[i][2].innerText ) ; 
            localStorage.removeItem(("inc-"+ incarr[i][1].innerText ) ) ; 
            allIncome.innerHTML=`Total Income: $ ${incsum}` ;
            total(incsum,expSumInc) ; 
            incarr[i][0].remove() ; 
            incarr[i][1].remove() ; 
            incarr[i][2].remove() ; 
            incarr[i][3].remove() ; 
            incarr[i][4].remove() ; 
            incarr.splice(i, 1 ) ; 
            console.log(incarr.length ) ; 
        } 
    } 
    console.log(incarr ) ; 
    for(let i= 0 ; i< incarr.length ; ++i ) 
    { 
        incarr[i][0].innerText= i+ 1 ; 
    } 
    if(incarr.length== 0 ) 
    { 
        incomeTable.style.display= "none" ; 
    } 
    window.location.reload(true ) ; 
    console.log(incarr ) ; 
} 
let exparr= [] ; 
let expPreCat= document.querySelector(".expense-category-en" ) ; 
let expNewCat= document.querySelector(".input-expense-category" ) ; 
let expAmo= document.querySelector(".expense-category-amount" ) ; 
let expBtn= document.querySelector(".apply-expense" ) ; 
let expDel= document.querySelector(".expense-delete-category" ) ; 
let expDelBtn= document.querySelector(".expense-delete-cat" ) ; 
let expenseTable= document.querySelector(".expense-table-a" ) ; 
let messageExpCat= document.querySelector(".expense-message-input" ) ; 
let expNewMes= document.querySelector(".expense-category-present" ) ; 
let amountMes= document.querySelector(".expense-message-category" ) ; 
let amountExpPre= document.querySelector(".amount-expense-display" ) ; 
let amountExpDec= document.querySelector(".amount-expense-decrease" ) ; 
for(let i= 0 ; i< localStorage.length ; ++i ) 
{ 
    let s= localStorage.key(i ) ; 
    if(s.slice(0, 4 )== "exp-" ) 
    { 
        let expSl= exparr.length+ 1 ; 
        let expStore= s.slice(4, s.length ) ; 
        let expsto= localStorage.getItem(s ) ; 
        let exptl= document.querySelector(".expense-table" ) ; 
        let roe= document.createElement("tr" ) ; 
        let eda= document.createElement("td" ) ; 
        let edb= document.createElement("td" ) ; 
        let edc= document.createElement("td" ) ; 
        eda.innerText= expSl ; 
        edb.innerText= expStore ; 
        edc.innerText= expsto ; 
        roe.appendChild(eda ) ; 
        roe.appendChild(edb ) ; 
        roe.appendChild(edc ) ; 
        exptl.appendChild(roe ) ; 
        let oep= document.createElement("option" ) ; 
        oep.innerText= expStore ; 
        oep.value= expStore ; 
        let oes= document.createElement("option" ) ; 
        oes.innerText= expStore ; 
        oes.value= expStore ; 
        exparr.push([eda, edb, edc, oep, oes ] ) ; 
        expSumInc= expSumInc+ parseInt(edc.innerText ) ; 
        allExp.innerText= "Total Expense: $ "+ expSumInc ; 
        total(incsum, expSumInc ) ; 
        if(exparr.length> 0 ) 
        { 
            expenseTable.style.display= "initial" ; 
        } 
        expPreCat.appendChild(oep ) ; 
        expDel.appendChild(oes ) ; 
    } 
} 
expPreCat.addEventListener("click", function(e ) 
{ 
    if(expPreCat.value!= "Choose" ) 
    { 
        messageExpCat.style.display= "none" ; 
        amountMes.style.display= "none" ; 
        expNewCat.value= "" ; 
    } 
} ) 
expNewCat.addEventListener("input", function(e ) 
{ 
    messageExpCat.style.display= "none" ; 
    amountMes.style.display= "none" ; 
    expPreCat.children[0].selected= true ; 
    if(expNewMes.style.display!= "none" ) 
    { 
        expNewMes.style.display= "none" ; 
    } 
} ) 
expAmo.addEventListener("input", function(e ) 
{ 
    messageExpCat.style.display= "none" ; 
    if(expAmo.value>= 0 ) 
    { 
        amountExpPre.style.display= "none" ; 
    } 
} ) 
expBtn.addEventListener("click", function(e ) 
{ 
    let spi= 0 ; 
    expNewCat.value= expNewCat.value.trim() ; 
    if(((expNewCat.value== "" || expNewCat.value.length== spi ) && expPreCat.value== "Choose" ) || expAmo.value== "" ) 
    { 
        if(expAmo.value== "" ) 
        { 
            messageExpCat.style.display= "initial" ; 
        } 
        else 
        { 
            amountMes.style.display= "initial" ; 
        } 
        setTimeout(()=> 
        { 
            messageExpCat.style.display= "none" ; 
            amountMes.style.display= "none" ; 
        }, 3000 ) ; 
        return ; 
    } 
    let ci= 0 ; 
    exparr.forEach((elm )=> 
    { 
        if(elm[1].innerText== expNewCat.value ) 
        { 
            ci++ ; 
            expNewMes.style.display= "initial" ; 
            return ; 
        } 
        if(elm[1].innerText== expPreCat.value ) 
        { 
            if((parseInt(elm[2].innerText )+ parseInt(expAmo.value ) )<= 0 ) 
            { 
                amountExpDec.style.display= "initial" ; 
                setTimeout(()=> 
                { 
                    amountExpDec.style.display= "none" ; 
                }, 6000 ) ; 
                ci++ ; 
                return ; 
            } 
            ci++ ; 
            elm[2].innerText= parseInt(elm[2].innerText )+ parseInt(expAmo.value ) ; 
            expSumInc= expSumInc+ parseInt(elm[2].innerText ) ; 
            localStorage.setItem("exp-"+ elm[1].innerText, elm[2].innerText ) ; 
            window.location.reload(true ) ; 
            return ; 
        } 
    } ) ; 
    if(ci> 0 ) 
    { 
        return ; 
    } 
    if(expAmo.value< 0 ) 
    { 
        amountExpPre.style.display= "initial" ; 
        return ; 
    } 
    let exptl= document.querySelector(".expense-table" ) ; 
    let rowep= document.createElement("tr" ) ; 
    let tre1= document.createElement("td" ) ; 
    let tre2= document.createElement("td" ) ; 
    let tre3= document.createElement("td" ) ; 
    tre1.innerText= exparr.length+ 1 ; 
    tre2.innerText= expNewCat.value ; 
    tre3.innerText= expAmo.value ; 
    rowep.appendChild(tre1 ) ; 
    rowep.appendChild(tre2 ) ; 
    rowep.appendChild(tre3 ) ; 
    rowep.classList.add("tbep"+ (exparr.length+ 1 ) ) ; 
    exptl.appendChild(rowep ) ; 
    let oep1= document.createElement("option" ) ; 
    oep1.innerText= expNewCat.value ; 
    oep1.value= expNewCat.value ; 
    let oep2= document.createElement("option" ) ; 
    oep2.innerText= expNewCat.value ; 
    oep2.value= expNewCat.value ; 
    expPreCat.appendChild(oep2 ) ; 
    expDel.appendChild(oep1 ) ; 
    localStorage.setItem("exp-"+ tre2.innerText, tre3.innerText ) ; 
    expSumInc= expSumInc+ parseInt(expAmo.value ) ; 
    allExp.innerHTML=`Total Expense: $ ${expSumInc}`
    total(incsum,expSumInc);
    exparr.push([tre1, tre2, tre3, oep1, oep2 ] ) ; 
    if(exparr.length> 0 ) 
    { 
        expenseTable.style.display= "initial" ; 
    } 
    expPreCat.children[0].selected= true ; 
    expNewCat.value= "" ; 
    expAmo.value= "" ; 
    window.location.reload(true ) ; 
} ) 
expDelBtn.addEventListener("click", delEp ) 
function delEp(e ) 
{ 
    if(expDel.value== "Choose" ) 
    { 
        return ; 
    } 
    for(let i= 0 ; i< exparr.length ; ++i ) 
    { 
        if(exparr[i][1].innerText== expDel.value ) 
        { 
            localStorage.removeItem("exp-"+ exparr[i][1].innerText ) ; 
            expSumInc= expSumInc- parseInt(exparr[i][2].innerText ) ; 
            allExp.innerHTML=`Total Expense: $ ${expSumInc}`
            total(incsum,expSumInc); 
            exparr[i][0].remove() ; 
            exparr[i][1].remove() ; 
            exparr[i][2].remove() ; 
            exparr[i][3].remove() ; 
            exparr[i][4].remove() ; 
            exparr.splice(i, 1 ) ; 
            console.log(exparr[i] ) ; 
        } 
    } 
    for(let i= 0 ; i< exparr.length ; ++i ) 
    { 
        exparr[i][0].innerText= i+ 1 ; 
    } 
    if(exparr.length== 0 ) 
    { 
        expenseTable.style.display= "none" ; 
    } 
    window.location.reload(true ) ; 
    console.log(exparr ) ; 
} 
function total(incSum,incExp){
    balanceAll.innerHTML=`Balance: $ ${incSum-incExp}`
} 
let api_key= "https://v6.exchangerate-api.com/v6/"+ apikey+ "/latest/USD" ; 
const fromCurrencySelect= document.querySelector(".currency-select" ) ; 
const toCurrencySelect= document.querySelector(".currency-to" ) ; 
currency_codes.forEach((currency )=> 
{ 
    let op= document.createElement("option" ) ; 
    op.value= currency ; 
    op.innerText= currency ; 
    let opa= document.createElement("option" ) ; 
    opa.value= currency ; 
    opa.innerText= currency ; 
    fromCurrencySelect.appendChild(op ) ; 
    toCurrencySelect.appendChild(opa ) ; 
} ) ; 
fromCurrencySelect.value= "USD" ; 
toCurrencySelect.value= "INR" ; 
let amountMessage= document.querySelector(".amount-display-currency" ) ; 
let convertedResult= document.querySelector(".money-convert-display" ) ; 
let fromCurrency= "USD", toCurrency= "INR" ; 
let convertCurrency= ()=> 
{ 
    amount= document.querySelector(".input-convert-amount" ).value ; 
    fromCurrency= fromCurrencySelect.value ; 
    toCurrency= toCurrencySelect.value ; 
    if(amount> 0 && amount!= "" ) 
    { 
        fetch(api_key ).then((resp )=> resp.json() ).then((data )=> 
        { 
            console.log(data ) ; 
            let fromExchangeRates= data.conversion_rates[fromCurrency] ; 
            let toExchangeRates= data.conversion_rates[toCurrency] ; 
            localStorage.setItem("amount", amount ) ; 
            localStorage.setItem("fromCurrency", fromCurrency ) ; 
            localStorage.setItem("toCurrency", toCurrency ) ; 
            let convertedAmount= (amount/ fromExchangeRates )* toExchangeRates ; 
            localStorage.setItem("convertAmount", ""+ convertedAmount ) ; 
            convertedResult.innerHTML= `${(parseInt(localStorage.getItem("amount" ) ) ) } ${localStorage.getItem("fromCurrency" ) } = ${((parseFloat(localStorage.getItem("convertAmount" ) ) ).toFixed(2 ) ) } ${localStorage.getItem("toCurrency" ) } ` ; 
        } ) 
    } 
    else 
    { 
        amountMessage.style.display= "initial" ; 
        setTimeout(()=> 
        { 
            amountMessage.style.display= "none" ; 
        }, 6000 ) ; 
    } 
} 
let convertButton= document.querySelector(".convert-money-button" ) ; 
convertButton.addEventListener("click", convertCurrency ) ; 
let inpAui= document.querySelector(".input-convert-amount" ) ; 
if(localStorage.getItem("amount" )!= null ) 
{ 
    inpAui.value= parseInt(localStorage.getItem("amount" ) ) ; 
    fromCurrencySelect.value= localStorage.getItem("fromCurrency" )?? "USD" ; 
    toCurrencySelect.value= localStorage.getItem("toCurrency" )?? "INR" ; 
    convertedResult.innerHTML= `${(parseInt(localStorage.getItem("amount" ) ) ) } ${localStorage.getItem("fromCurrency" ) } = ${((parseFloat(localStorage.getItem("convertAmount" ) ) ).toFixed(2 ) ) } ${localStorage.getItem("toCurrency" ) } ` ; 
} 