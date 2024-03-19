import React from 'react';
// import './MembershipPage.css'; // Import CSS file for styling

// Sample subscription data
const subscriptionPackages = [
  {
    id: 1,
    name: 'Basic',
    price: '$9.99',
    features: ['Access to basic content', 'Limited support']
  },
  {
    id: 2,
    name: 'Standard',
    price: '$19.99',
    features: ['Access to premium content', 'Priority support']
  },
  {
    id: 3,
    name: 'Premium',
    price: '$29.99',
    features: ['Access to all content', '24/7 support']
  }
];

function MembershipPage() {
  return (
    <div className="membership-page">
      <h1>Choose a Membership Plan</h1>
      <div className="subscription-packages">
        {subscriptionPackages.map(packageItem => (
          <div key={packageItem.id} className="subscription-package">
            <h2>{packageItem.name}</h2>
            <p className="price">{packageItem.price} <span className="per-month">/ month</span></p>
            <ul>
              {packageItem.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button>Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MembershipPage;
