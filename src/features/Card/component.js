import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

class CardNumber extends React.Component {
    constructor(props) {
        super(props)

        this.state = { open: true }
    }

    render() {
        let className = styles.curtain
        if (!this.state.open) {
            className = `${className} ${styles.closed}`
        }
        const number = this.props.number === 0 ? 'FREE' : this.props.number
        return (
                <div className={styles.square} onClick={() => { this.setState({ open: !this.state.open }) }}>
                    <div className={className} />
                    <div>{number}</div>
                </div>
        ) 
    }
}

CardNumber.propTypes = {
    number: PropTypes.number.isRequired,
}

// const CardNumber = ({ number }) => {
//     return (
//         <div className={styles.column}>
//             <div className={styles.square}>
//                 <div>
//                     <div className={styles.curtain} onClick={() => } />
//                     <div>{number}</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

const CardRow = ({ numbers }) => {
    const cols = numbers.map(number => <CardNumber key={number} number={number} />)
    return (
        <div className={styles.row}>
            {cols}
        </div>
    )
}

CardRow.propTypes = {
    numbers: PropTypes.arrayOf(PropTypes.number),
}

const Card = () => {
    const card = [[15,6,4,13,9],[17,28,21,30,23],[45,41,0,35,38],[60,50,54,51,57],[75,65,73,69,74]]
    const zipped = _.zip(...card)
    console.log('zipped: ', zipped)
    // todo: fix the numbers input into cardRow, it should be a row, not a column...
    return (
        <div className={styles.card}>
            <div className={styles.header}>This is a card header</div>
            <div className={styles.container}>
                <div className={styles.left}>Left side</div>
                <div className={styles.grid}>
                    <div className={styles.bingo}><div>B</div><div>I</div><div>N</div><div>G</div><div>O</div></div>
                    <div className={styles.bingoNumbers}>
                        <CardRow numbers={zipped[0]} />
                        <CardRow numbers={zipped[1]} />
                        <CardRow numbers={zipped[2]} />
                        <CardRow numbers={zipped[3]} />
                        <CardRow numbers={zipped[4]} />
                    </div>
                </div>
                <div className={styles.right}>Right side</div>
            </div>
            <div className={styles.footer}>This is a card footer</div>
        </div>
    )
}

export default Card
