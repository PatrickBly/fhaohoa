//displays acc creation div
function showTypeOfAccountCreation(){
    document.getElementById('typeOfAccountCreationDiv').style.display = 'grid';
}

const generalErrorMsg = document.createElement('h2')
generalErrorMsg.className = "generalErrorMsg"
generalErrorMsg.innerHTML = "oh no. There was an error. Refresh to try again."

// function addToUsers(){
//     let checkList = [];
//     for (users in usersAndPermissions){
//         checkList.push(users.USERemails)
//     }
//     //still have to determine whats causing it to upload the same email multiple times
//     if ((document.getElementById('emailInputs').value in checkList) == false){
//         let emailInputs = document.getElementById('emailInputs').value;
//         let usernameInput = document.getElementById('usernameInputs').value;
//         let passwordInputs = document.getElementById('passwordInputs').value;
//         let userId = usersAndPermissions.length + 1;
//         if (window.location.href = '/signInAndAccountCreation/artistAccountCreation'){
//             let userPermission = 'artist';
//             usersAndPermissions.push({USERids: userId, USERpermission: userPermission, USERemails: emailInputs, USERname: usernameInput, USERpassword: passwordInputs});
//         } else if (window.location.href = '/signInAndAccountCreation/listenerAccountCreation'){
//             let userPermission = 'listener';
//             usersAndPermissions.push({USERids: userId, USERpermission: userPermission, USERemails: emailInputs, USERname: usernameInput, USERpassword: passwordInputs});
//         } else {
//             document.getElementById('createProfileButton').appendChild(generalErrorMsg)
//         }
//         window.location.href = '/signInAndAccountCreation/signInPage.html';
//     } else if (document.getElementById('emailInputs').value in checkList){
//         emailAlreadyInUseMsg = document.createElement('h2');
//         emailAlreadyInUseMsg.innerHTML = 'That email already has an account!?';
//         emailAlreadyInUseMsg.className = 'signInErrorMsg';
//         document.getElementById('createProfileButton').appendChild(emailAlreadyInUseMsg); 
//         window.location.href = '/signInAndAccountCreation/signInPage.html';
//     } else {
//         document.getElementById('createProfileButton').appendChild(generalErrorMsg);
//     }
//     console.log(usersAndPermissions);
// }

//#region artist name inputs are stored in the userAccess object
/*finishBTN = document.getElementById('finishSignInButton')
function saveToLocalStorage(){
    //create function specific variables
    usernameInputs = document.getElementsByName('usernameInputs').textContent
    emailInputs = document.getElementsByName('emailInputs').textContent
    passwordInputs = document.getElementsByName('passwordInputs').textContent

    if (window.location.href == '/signInAndAccountCreation/artistAccountCreation' && document.getElementsByClassName('textInputs') != ''){
        localStorage.setItem('ARTISTUSERNAME', usernameInputs.textContent)
        localStorage.setItem('ARTISTEMAIL', emailInputs.textContent)
        localStorage.setItem('ARTISTPASSWORD', passwordInputs.textContent)
    } else if (window.location.href == '/signInAndAccountCreation/listenerAccountCreation' && document.getElementsByClassName('textInputs') != ''){
        localStorage.setItem('LISTENERUSERNAME', usernameInputs)
        localStorage.setItem('LISTENEREMAIL', emailInputs)
        localStorage.setItem('LISTENERPASSWORD', passwordInputs)
    } else if (document.getElementsByClassName('textInputs') == ''){
        missingInformationMsg = document.createElement('h3');
        missingInformationMsg = 'There appears to be some empty fields.';
        document.getElementById('createProfileButton').appendChild(missingInformationMsg);
    } else {
        generalErrorMsg = document.createElement('h3');
        generalErrorMsg = 'An error has occured. Please try again.';
        document.getElementById('createProfileButton').appendChild(generalErrorMsg);
    }
}
finishBTN.addEventListener('click', saveToLocalStorage)
//#endregion*/