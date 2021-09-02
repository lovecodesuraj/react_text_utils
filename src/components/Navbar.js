import React from 'react'
import PropTypes from 'prop-types'
import {Link, Router} from 'react-router-dom'

export default function Navbar(props) {
    let capitalise=(str)=>{
        return (str[0].toUpperCase()+str.slice(1));
    }
    let themeIdx=props.theme.idx;
    let color=props.theme.colors[themeIdx].color;

    // function ColorButtons(){
    //     let div=document.createElement('div');
    //     props.theme.colors.forEach((clr,idx)=>{
    //         // div.appendChild((<button class="btn" style={{backgroundColor:clr.color}}>{clr.name}</button>));
    //         div.innerHTML+=`<button class="btn" style="backgroundColor:${clr.color}">${clr.name}</button>`;
    //         console.log((<button class="btn" style={{backgroundColor:clr.color}}>{clr.name}</button>));
    //     });
    //     console.log(div);
    //     return div;
    // }
    // ColorButtons();

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div id="themeColor">
                        {/* <ColorButtons/> */}
                        Select theme color:
                        <button className="btn mx-1" onClick={()=>{
                            props.setThemeId(0);
                            document.querySelector("link[rel~='icon']").href=`./favicons/${props.theme.colors[0].name}/favicon.ico`;
                            document.title="TextUtils - "+props.theme.colors[0].name;
                        }} style={{backgroundColor:props.theme.colors[0].color}}>{props.theme.colors[0].name}</button>
                        <button className="btn mx-1" onClick={()=>{
                            props.setThemeId(1);
                            document.querySelector("link[rel~='icon']").href=`./favicons/${props.theme.colors[1].name}/favicon.ico`;
                            document.title="TextUtils - "+props.theme.colors[1].name;
                        }} style={{backgroundColor:props.theme.colors[1].color}}>{props.theme.colors[1].name}</button>
                        <button className="btn mx-1" onClick={()=>{
                            props.setThemeId(2);
                            document.querySelector("link[rel~='icon']").href=`./favicons/${props.theme.colors[2].name}/favicon.ico`;
                            document.title="TextUtils - "+props.theme.colors[2].name;
                        }} style={{backgroundColor:props.theme.colors[2].color}}>{props.theme.colors[2].name}</button>
                        <button className="btn mx-1" onClick={()=>{
                            props.setThemeId(3);
                            document.querySelector("link[rel~='icon']").href=`./favicons/${props.theme.colors[3].name}/favicon.ico`;
                            document.title="TextUtils - "+props.theme.colors[3].name;
                        }} style={{backgroundColor:props.theme.colors[3].color}}>{props.theme.colors[3].name}</button>
                    </div>
                    <div className="form-check form-switch mx-3">
                        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{capitalise(props.mode)} Mode</label>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-warning" type="submit" style={{borderColor:color,color:color}}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
};

Navbar.defaultProps={
    title:'Set title here',
    aboutText:'Set about here'
};

