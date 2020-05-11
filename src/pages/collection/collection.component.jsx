import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/checkout-item/checkout-item.component'

import { selectCollection } from '../../redux/shop/shop.selector'

import './collection.styles.scss'

const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}
                <div>
                    {items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
                </div>
            </h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)