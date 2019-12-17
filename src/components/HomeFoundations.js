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
        isToggleOn: true
    };

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
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
                <div>
                    <ul >
                        { pageNumbers }
                    </ul>
               </div>
        </>
        )
    }

    render() {
        const {foundations, targets, stuffs, currentPage, foundationsPerPage} = this.state;

        let foundationsToDisplay = foundations.map((foundation, i) =>{
            return <h2 key={'f' + i}>{foundation}</h2>
        });
        let targetsToDisplay = targets.map((target, i) =>{
            return <p key={'t' + i}>{target}</p>
        });
        let stuffsToDisplay = stuffs.map((stuff, i) =>{
            return <p key={'s' + i}>{stuff}</p>
        });

        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(foundations.length/foundationsPerPage); i++){
            const pageNumber = <li key={i}
                                    onClick={event => this.changePage(event, i)}>{i}</li>;
            pageNumbers.push(pageNumber)
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

        return (
            <div className="foundations__container">
                <div className="foundations__box1">
                    <h1>Komu pomagamy?</h1>
                    <div className="idea__picture"></div>
                    <div className="foundations__choose--box">
                        <div className="foundations__section1 foundations__sections" onClick={this.handleClick.bind(this)}>Fundacjom</div>
                        <div className="foundations__section2 foundations__sections">Organizacjom pozarządowym</div>
                        <div className="foundations__section3 foundations__sections">Lokalnym zbiórkom</div>
                    </div>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmóją, komu pomagają i czego potrzebują.</p>
                </div>
            <div>{this.state.isToggleOn ? currentPageHtml : ""}</div>
            </div>
        )

        // if(currentPage === 1) {
        //     return (
        //         <div className="foundations__container">
        //             <div className="foundations__box1">
        //                 <h1>Komu pomagamy?</h1>
        //                 <div className="idea__picture"></div>
        //                 <div className="foundations__choose--box">
        //                     <div className="foundations__section1 foundations__sections">Fundacjom</div>
        //                     <div className="foundations__section2 foundations__sections">Organizacjom pozarządowym</div>
        //                     <div className="foundations__section3 foundations__sections">Lokalnym zbiórkom</div>
        //                 </div>
        //                 <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
        //                     sprawdzić czym się zajmóją, komu pomagają i czego potrzebują.</p>
        //             </div>
        //             <div className="foundations__pagination--box">
        //                 <div className="pagination__box1">
        //                     <div className="pagination_text1">
        //                         {elements1[0]}
        //                         {elements2[0]}
        //                     </div>
        //                     <div className="pagination_text2">
        //                         {elements3[0]}
        //                     </div>
        //                 </div>
        //                 <div className="foundations__line"></div>
        //                 <div className="pagination__box1">
        //                     <div className="pagination_text1">
        //                         {elements1[1]}
        //                         {elements2[1]}
        //                     </div>
        //                     <div className="pagination_text2">
        //                         {elements3[1]}
        //                     </div>
        //                 </div>
        //                 <div className="foundations__line"></div>
        //                 <div className="pagination__box1">
        //                     <div className="pagination_text1">
        //                         {elements1[2]}
        //                         {elements2[2]}
        //                     </div>
        //                     <div className="pagination_text2">
        //                         {elements3[2]}
        //                     </div>
        //                 </div>
        //             </div>
        //             <div>
        //                 <ul>
        //                     {pageNumbers}
        //                 </ul>
        //             </div>
        //         </div>
        //     )
        // }
        // else if(currentPage === 2){
        //     return(
        //         <div className="foundations__container">
        //             <div className="foundations__box1">
        //                 <h1>Komu pomagamy?</h1>
        //                 <div className="idea__picture"></div>
        //                 <div className="foundations__choose--box">
        //                     <div className="foundations__section1 foundations__sections">Fundacjom</div>
        //                     <div className="foundations__section2 foundations__sections">Organizacjom pozarządowym</div>
        //                     <div className="foundations__section3 foundations__sections">Lokalnym zbiórkom</div>
        //                 </div>
        //                 <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
        //                     sprawdzić czym się zajmóją, komu pomagają i czego potrzebują.</p>
        //             </div>
        //             <div className="foundations__pagination--box">
        //                 <div className="pagination__box1">
        //                     <div className="pagination_text1">
        //                         {elements1[3]}
        //                         {elements2[3]}
        //                     </div>
        //                     <div className="pagination_text2">
        //                         {elements3[3]}
        //                     </div>
        //                 </div>
        //                 <div className="foundations__line"></div>
        //                 <div className="pagination__box1">
        //                     <div className="pagination_text1">
        //                         {elements1[4]}
        //                         {elements2[4]}
        //                     </div>
        //                     <div className="pagination_text2">
        //                         {elements3[4]}
        //                     </div>
        //                 </div>
        //                 <div className="foundations__line"></div>
        //                 <div className="pagination__box1">
        //                     <div className="pagination_text1">
        //                         {elements1[5]}
        //                         {elements2[5]}
        //                     </div>
        //                     <div className="pagination_text2">
        //                         {elements3[5]}
        //                     </div>
        //                 </div>
        //             </div>
        //             <div>
        //                 <ul>
        //                     {pageNumbers}
        //                 </ul>
        //                 {/*<div className="first" onClick={this.handleClick1}>1</div>*/}
        //                 {/*<div className="second" onClick={this.handleClick2}>2</div>*/}
        //                 {/*<div className="third" onClick={this.handleClick3}>3</div>*/}
        //             </div>
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div className="foundations__container">
        //             <div className="foundations__box1">
        //                 <h1>Komu pomagamy?</h1>
        //                 <div className="idea__picture"></div>
        //                 <div className="foundations__choose--box">
        //                     <div className="foundations__section1 foundations__sections">Fundacjom</div>
        //                     <div className="foundations__section2 foundations__sections">Organizacjom pozarządowym</div>
        //                     <div className="foundations__section3 foundations__sections">Lokalnym zbiórkom</div>
        //                 </div>
        //                 <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
        //                     sprawdzić czym się zajmóją, komu pomagają i czego potrzebują.</p>
        //             </div>
        //             <div className="foundations__pagination--box">
        //                 <div className="pagination__box1">
        //                     <div className="pagination_text1">
        //                         {elements1[6]}
        //                         {elements2[6]}
        //                     </div>
        //                     <div className="pagination_text2">
        //                         {elements3[6]}
        //                     </div>
        //                 </div>
        //                 <div className="foundations__line"></div>
        //                 <div className="pagination__box1">
        //                     <div className="pagination_text1">
        //                         {elements1[7]}
        //                         {elements2[7]}
        //                     </div>
        //                     <div className="pagination_text2">
        //                         {elements3[7]}
        //                     </div>
        //                 </div>
        //                 <div className="foundations__line"></div>
        //                 <div className="pagination__box1">
        //                     <div className="pagination_text1">
        //                         {elements1[8]}
        //                         {elements2[8]}
        //                     </div>
        //                     <div className="pagination_text2">
        //                         {elements3[8]}
        //                     </div>
        //                 </div>
        //             </div>
        //             <div>
        //                 <ul>
        //                     {pageNumbers}
        //                 </ul>
        //                 {/*<div className="first" onClick={this.handleClick1}>1</div>*/}
        //                 {/*<div className="second" onClick={this.handleClick2}>2</div>*/}
        //                 {/*<div className="third" onClick={this.handleClick3}>3</div>*/}
        //             </div>
        //         </div>
        //     )
        // }
    }
}

export default HomeFoundations;