import bell from "../../assets/icon/Notification Bell.svg";
import dashboard from "../../assets/icon/Home.svg";
function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <div className="userName">
          <h1>Good Afternoon, Olayinka</h1>
          <p>Welcome to your Shelterstride dashboard</p>
        </div>
        <div>
          <img src={bell} alt="notification icon" />
        </div>
      </div>
      <section className="overview">
        <section className="subscription">
          <div>
            <p>Here is a quick overview of what’s happening.</p>
          </div>
          <div className="whiteCard">
            <div>
              <div>
                <img src={dashboard} alt="dashboard icon" />
              </div>
              <div>
                <h3>Subscription Status</h3>
                <p>Active subscription</p>
              </div>
              <div>
                <h1>0</h1>
              </div>
              <div>
                <p>view all</p>
              </div>
            </div>
          </div>
        </section>
        <div></div>
      </section>
      <section>
        <div></div>
        <div></div>
      </section>
    </div>
  );
}

export default Dashboard;
