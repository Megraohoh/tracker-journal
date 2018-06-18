// // //Purpose: Display navbar
// const $ = require("jquery")

// const navComponent = function() {
//     const navEl = $("#navbar")

//     const nav = document.createElement("nav")
//     navEl.append(nav)

//     const divNav = document.createElement("div")
//     divNav.setAttribute("class", "nav-wrapper")
//     divNav.setAttribute("class", "navbar-fixed")
//     nav.append(divNav)

//     const logoATag = document.createElement("a")
//     logoATag.setAttribute("href", "#")
//     logoATag.setAttribute("class", "brand-logo")
//     logoATag.textContent = "HealthMe"
//     divNav.append(logoATag)

//     const navUl = document.createElement("ul")
//     navUl.setAttribute("id", "nav-mobile")
//     navUl.setAttribute("class", "right hide-on-med-and-down")
//     divNav.append(navUl)

//     const navLiHome = document.createElement("li")
//     const aHome = document.createElement("a")
//     aHome.setAttribute("href", "#")
//     aHome.textContent = "Home"
//     navLiHome.append(aHome)
//     divNav.append(navLiHome)

//     const navLiEntries = document.createElement("li")
//     const aEntries = document.createElement("a")
//     aEntries.setAttribute("href", "#")
//     aEntries.textContent = "Entries"
//     navLiEntries.append(aEntries)
//     divNav.append(navLiEntries)

//     const navLiCharts = document.createElement("li")
//     const aCharts = document.createElement("a")
//     aCharts.setAttribute("href", "#")
//     aCharts.textContent = "Charts"
//     navLiCharts.append(aCharts)
//     divNav.append(navLiCharts)

//     const navLiSettings = document.createElement("li")
//     const aSettings = document.createElement("a")
//     aSettings.setAttribute("href", "#")
//     aSettings.textContent = "Settings"
//     navLiSettings.append(aSettings)
//     divNav.append(navLiSettings)

//     const navLiLogout = document.createElement("li")
//     const aLogout = document.createElement("a")
//     aLogout.setAttribute("href", "#")
//     aLogout.textContent = "Logout"
//     navLiLogout.append(aLogout)
//     divNav.append(navLiLogout)

// }

// module.exports = navComponent