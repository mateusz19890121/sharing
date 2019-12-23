import React, {Component} from 'react';
import ReactDOM from "react-dom";

class HomeFoundations extends React.Component{
    state = {
        foundations: [
            'Fundacja "Dbam o Zdrowie"',
            'Fundacja "Dla dzieci"',
            'Fundacja "Bez domu"',
            'Fundacja "Nigeria"',
            'Fundacja "Etiopia"',
            'Fundacja "Mozambik"',
            'Fundacja "Syria"',
            'Fundacja "Indie"',
            'Fundacja "Somalia"'],
        organisations: [
            'Organizacja “Lorem Ipsum 1”',
            'Organizacja “Lorem Ipsum 2”',
            'Organizacja “Lorem Ipsum 3”',
            'Organizacja “Lorem Ipsum 4”',
            'Organizacja “Lorem Ipsum 5”',
            'Organizacja “Lorem Ipsum 6”',
        ],
        local: [
            'Zbiórka “Lorem Ipsum 1”',
            'Zbiórka “Lorem Ipsum 2”',
            'Zbiórka “Lorem Ipsum 3”',
        ],
        targets2:[
            'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
            'Scelerisque in dictum non consectetur a erat nam.',
            'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
            'Scelerisque in dictum non consectetur a erat nam.',
            'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        ],
        targets: [
            'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
            'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
            'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
            'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji w Nigerii.',
            'Cel i misja: Pomoc dzieciom z ubogich rodzin w Etiopi.',
            'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania w Mozambiku',
            'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej w Syri.',
            'Cel i misja: Pomoc dzieciom z ubogich rodzin w Indiach.',
            'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania w Somalii'],
        stuffs2: [
            'Egestas, sed, tempus',
            'Ut, aliquam, purus, sit, amet',
            'Mi, quis, hendrerit, dolor',
            'Ut, aliquam, purus, sit, amet',
            'Mi, quis, hendrerit, dolor',
            'Egestas, sed, tempus',
        ],
        stuffs: [
            'ubrania, jedzenie, sprzęt AGD, meble, zabawiki',
            'ubrania, meble, zabawki',
            'ubrania, jedzenie, ciepłe koce',
            'ubrania, jedzenie, sprzęt AGD, meble, zabawiki',
            'ubrania, meble, zabawki, sprzęt AGD',
            'meble, ubrania, jedzenie, ciepłe koce',
            'ubrania, jedzenie, meble, zabawiki',
            'ubrania, konserwy, meble, zabawki',
            'jedzenie, ciepłe koce, zabawki, ubrania'],
        currentPage: 1,
        foundationsPerPage: 3,
        isToggleOn: true,
        isOrganisations: false,
        localPage: 1,
        isLocal: false,
        color: "black"
    };

    handleClick(){
        this.setState({
            isToggleOn: true,
            isOrganisations: false,
            isLocal: false,
            currentPage: 1
        })
    }
    handleClickOrganisations(){
        this.setState({
            isToggleOn: false,
            isOrganisations: true,
            isLocal: false,
            currentPage: 1
        })
    }
    handleClickLocal(){
        this.setState({
            isToggleOn: false,
            isOrganisations: false,
            isLocal: true,
            currentPage: 1
        })
    }
    changePage(event, i) {
        this.setState({
            currentPage: i
        })
    }

    displayCurrentPage(foundationsToDisplay, targetsToDisplay, stuffsToDisplay,  currentPage, pageNumbers) {
        return (
            <>
                <div className="foundations__pagination--box">
                    <div className="pagination__box1">
                        <div className="pagination_text1" id={currentPage}>
                            {foundationsToDisplay[0]}
                            {targetsToDisplay[0]}
                        </div>
                        <div className="pagination_text2">
                            {stuffsToDisplay[0]}
                        </div>
                    </div>
                    <div className="foundations__line"></div>
                    <div className="pagination__box1">
                        <div className="pagination_text1">
                            {foundationsToDisplay[1]}
                            {targetsToDisplay[1]}
                        </div>
                        <div className="pagination_text2">
                            {stuffsToDisplay[1]}
                        </div>
                    </div>
                    <div className="foundations__line"></div>
                    <div className="pagination__box1">
                        <div className="pagination_text1">
                            {foundationsToDisplay[2]}
                            {targetsToDisplay[2]}
                        </div>
                        <div className="pagination_text2">
                            {stuffsToDisplay[2]}
                        </div>
                    </div>
                </div>
                <div className="page__number--box">
                    <ul className="page__number--ul">
                        { pageNumbers }
                    </ul>
               </div>
        </>
        )
    }
    displayOrganisations(organisationsToDisplay, targets2ToDisplay, stuffs2ToDisplay,  currentPage, pageNumbers2) {
        return (
            <>
                <div className="foundations__pagination--box">
                    <div className="pagination__box1">
                        <div className="pagination_text1" id={currentPage}>
                            {organisationsToDisplay[0]}
                            {targets2ToDisplay[0]}
                        </div>
                        <div className="pagination_text2">
                            {stuffs2ToDisplay[0]}
                        </div>
                    </div>
                    <div className="foundations__line"></div>
                    <div className="pagination__box1">
                        <div className="pagination_text1">
                            {organisationsToDisplay[1]}
                            {targets2ToDisplay[1]}
                        </div>
                        <div className="pagination_text2">
                            {stuffs2ToDisplay[1]}
                        </div>
                    </div>
                    <div className="foundations__line"></div>
                    <div className="pagination__box1">
                        <div className="pagination_text1">
                            {organisationsToDisplay[2]}
                            {targets2ToDisplay[2]}
                        </div>
                        <div className="pagination_text2">
                            {stuffs2ToDisplay[2]}
                        </div>
                    </div>
                </div>
                <div className="page__number--box">
                    <ul className="page__number--ul">
                        { pageNumbers2 }
                    </ul>
                </div>
            </>
        )
    }
    displayLocal(localToDisplay, targets2ToDisplay, stuffs2ToDisplay,  localPage) {
        return (
            <>
                <div className="foundations__pagination--box">
                    <div className="pagination__box1">
                        <div className="pagination_text1" id={localPage}>
                            {localToDisplay[0]}
                            {targets2ToDisplay[0]}
                        </div>
                        <div className="pagination_text2">
                            {stuffs2ToDisplay[0]}
                        </div>
                    </div>
                    <div className="foundations__line"></div>
                    <div className="pagination__box1">
                        <div className="pagination_text1">
                            {localToDisplay[1]}
                            {targets2ToDisplay[1]}
                        </div>
                        <div className="pagination_text2">
                            {stuffs2ToDisplay[1]}
                        </div>
                    </div>
                    <div className="foundations__line"></div>
                    <div className="pagination__box1">
                        <div className="pagination_text1">
                            {localToDisplay[2]}
                            {targets2ToDisplay[2]}
                        </div>
                        <div className="pagination_text2">
                            {stuffs2ToDisplay[2]}
                        </div>
                    </div>
                </div>
                <div className="page__number--box">
                    <ul className="page__number--ul">
                    </ul>
                </div>
            </>
        )
    }

    render() {
        const {foundations, targets, stuffs, currentPage, foundationsPerPage, organisations, targets2, stuffs2, local, localPage} = this.state;

        let localToDisplay = local.map((foundation, i) =>{
            return <h2 key={'z' + i}>{foundation}</h2>
        });
        let organisationsToDisplay = organisations.map((foundation, i) =>{
            return <h2 key={'a' + i}>{foundation}</h2>
        });
        let targets2ToDisplay = targets2.map((target, i) =>{
            return <p key={'b' + i}>{target}</p>
        });
        let stuffs2ToDisplay = stuffs2.map((stuff, i) =>{
            return <p key={'c' + i}>{stuff}</p>
        });
        let foundationsToDisplay = foundations.map((foundation, i) =>{
            return <h2 key={'f' + i}>{foundation}</h2>
        });
        let targetsToDisplay = targets.map((target, i) =>{
            return <p key={'t' + i}>{target}</p>
        });
        let stuffsToDisplay = stuffs.map((stuff, i) =>{
            return <p key={'s' + i}>{stuff}</p>
        });
        let pageStyle = {
            border: "1px solid black"
        };
        let pageStyle2 = {
            border: "1px solid transparent"
        };
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(foundations.length/foundationsPerPage); i++){
            const pageNumber = <li style={this.state.currentPage === i ? pageStyle : pageStyle2} className="page__number--li" key={i}
                                    onClick={event => this.changePage(event, i)}>{i}</li>;
            pageNumbers.push(pageNumber)
        }
        const pageNumbers2 = [];
        for(let i = 1; i <= Math.ceil(organisations.length/foundationsPerPage); i++){
            const pageNumber2 = <li style={this.state.currentPage === i ? pageStyle : pageStyle2} className="page__number--li" key={i}
                                   onClick={event => this.changePage(event, i)}>{i}</li>;
            pageNumbers2.push(pageNumber2)
        }

        let currentPageHtml = null;
        if (currentPage === 1) {
            foundationsToDisplay = foundationsToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            targetsToDisplay = targetsToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            stuffsToDisplay = stuffsToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            currentPageHtml = this.displayCurrentPage(foundationsToDisplay, targetsToDisplay, stuffsToDisplay, 1, pageNumbers);
        } else if (currentPage === 2) {
            foundationsToDisplay = foundationsToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            targetsToDisplay = targetsToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            stuffsToDisplay = stuffsToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            currentPageHtml = this.displayCurrentPage(foundationsToDisplay, targetsToDisplay, stuffsToDisplay, 2, pageNumbers);
        } else if (currentPage === 3) {
            foundationsToDisplay = foundationsToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            targetsToDisplay = targetsToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            stuffsToDisplay = stuffsToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            currentPageHtml = this.displayCurrentPage(foundationsToDisplay, targetsToDisplay, stuffsToDisplay, 3, pageNumbers);
        }

        let organisationPageHtml = null;
        if (currentPage === 1) {
            organisationsToDisplay = organisationsToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            targets2ToDisplay = targets2ToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            stuffs2ToDisplay = stuffs2ToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            organisationPageHtml = this.displayOrganisations(organisationsToDisplay, targets2ToDisplay, stuffs2ToDisplay, 1, pageNumbers2);
        } else if (currentPage === 2) {
            organisationsToDisplay = organisationsToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            targets2ToDisplay = targets2ToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            stuffs2ToDisplay = stuffs2ToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            organisationPageHtml = this.displayOrganisations(organisationsToDisplay, targets2ToDisplay, stuffs2ToDisplay, 2, pageNumbers2);
        }  else if (currentPage === 3) {
            organisationsToDisplay = organisationsToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            targets2ToDisplay = targets2ToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            stuffs2ToDisplay = stuffs2ToDisplay.slice(currentPage * 3 - 3, currentPage * 3);
            organisationPageHtml = this.displayOrganisations(organisationsToDisplay, targets2ToDisplay, stuffs2ToDisplay, 3, pageNumbers2);
        }
        let localPageHtml = null;
        if (localPage === 1) {
            targets2ToDisplay = targets2ToDisplay.slice(localPage * 3 - 3, currentPage * 3);
            stuffs2ToDisplay = stuffs2ToDisplay.slice(localPage * 3 - 3, currentPage * 3);
            localPageHtml = this.displayLocal(localToDisplay, targets2ToDisplay, stuffs2ToDisplay, 1);
        }
        const styles = {
            border: "1px solid black"
        };
        const style = {
            border: "1px solid transparent"
        };

        return (
            <div className="foundations__container" id="foundations">
                <div className="foundations__box1">
                    <h1>Komu pomagamy?</h1>
                    <div className="idea__picture"></div>
                    <div className="foundations__choose--box">
                        <div className="foundations__section1 foundations__sections" style={this.state.isToggleOn ? styles : style} onClick={this.handleClick.bind(this)}>Fundacjom</div>
                        <div className="foundations__section2 foundations__sections" style={this.state.isOrganisations ? styles : style} onClick={this.handleClickOrganisations.bind(this)}>Organizacjom<br/> pozarządowym</div>
                        <div className="foundations__section3 foundations__sections" style={this.state.isLocal ? styles : style} onClick={this.handleClickLocal.bind(this)}>Lokalnym<br/> zbiórkom</div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                       et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
            <div className="content__to--show">
                {this.state.isToggleOn ? currentPageHtml : ""}
                {this.state.isOrganisations ? organisationPageHtml : ""}
                {this.state.isLocal ? localPageHtml : ""}

            </div>
            </div>
        )
    }
}

export default HomeFoundations;