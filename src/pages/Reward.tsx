import React from 'react';

const Reward: React.FC = () => (
  <section className="container py-4">
    <h2 className="mb-4" style={{ color: '#FF9800', fontWeight: 700 }}>Rewards</h2>
    <div className="row g-4">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body">
            <h5 className="card-title">Weekly Top User</h5>
            <p className="card-text">Earn rewards for being the most active user of the week.</p>
            <span className="badge bg-warning text-dark">Top</span>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body">
            <h5 className="card-title">Quest Completion</h5>
            <p className="card-text">Complete quests to unlock badges and token rewards.</p>
            <span className="badge bg-primary">Quest</span>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0">
          <div className="card-body">
            <h5 className="card-title">Referral Bonus</h5>
            <p className="card-text">Invite friends and earn referral bonuses for each signup.</p>
            <span className="badge bg-success">Referral</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Reward;
