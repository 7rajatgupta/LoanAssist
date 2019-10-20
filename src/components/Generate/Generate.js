import React, { useEffect, useState, useRef } from "react";
import InputRange from "react-input-range";
import axios from "axios";
import "react-input-range/lib/css/index.css";
import "./Generate.css";

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const Generate = () => {
  const toTop = useRef(null);
  const [amount, setAmount] = useState(500);
  const [duration, setDuration] = useState(6);
  const [info, setInfo] = useState({
    rate: 0,
    numOfPayments: 0,
    monthlyAmount: 0
  });
  const [recentInput, setRecentInput] = useState(
    JSON.parse(localStorage.getItem("recentInputs") || "[]")
  );

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Enter Values");

  const FetchInfo = async () => {
    if (amount !== 0 || duration !== 0) {
      setMessage("Contacting our Agents...");
      setLoading(true);
      const response = await axios.get(
        `https://ftl-frontend-test.herokuapp.com/interest?amount=${amount}&numMonths=${duration}`
      );
      //console.log(response.data);
      setInfo({
        rate: response.data.interestRate,
        numOfPayments: response.data.numPayments,
        monthlyAmount: response.data.monthlyPayment.amount
      });
      const newSearch = { amount, duration };
      recentInput.push(newSearch);
      localStorage.setItem("recentInputs", JSON.stringify(recentInput));
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  useEffect(() => {
    setMessage("Choose Principal amount and desired period of duration.");
    setLoading(true);
  }, []);

  const getInfo = e => {
    e.preventDefault();
    if (amount !== 0 && duration !== 0) {
      if (amount < 500 || amount > 5000 || duration < 6 || duration > 24) {
        alert("Amount : $500-$5000, Duration : 6 months - 24 months");
      } else {
        FetchInfo();
      }
    } else {
      setMessage("Enter Values !!!!");
    }
  };

  return (
    <div ref={toTop}>
      <div className="container">
        <div className="card">
          <div className="card-header">Loan Scheme</div>
          <div className="card-body">
            <form className="form-group" onSubmit={getInfo}>
              <div>
                <h5 className="mb-5">Set Principal Amount</h5>
                <InputRange
                  maxValue={5000}
                  minValue={500}
                  formatLabel={value => `$ ${value}`}
                  value={amount}
                  step={100}
                  onChange={value => setAmount(value)}
                  onChangeComplete={value => setAmount(value)}
                />
              </div>
              <div>
                <h5 className="mb-5">Choose Duration of Months</h5>
                <InputRange
                  maxValue={24}
                  minValue={6}
                  formatLabel={value => `${value} months`}
                  value={duration}
                  onChange={value => setDuration(value)}
                  onChangeComplete={value => setDuration(value)}
                />
              </div>
              <button className="btn btn-generate" type="submit">
                Get Loan Details
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className="card mt-5">
            <div className="card-header">Loan Details</div>
            <div className="card-body">
              {loading ? (
                <p className="info">{message}</p>
              ) : (
                <div className="info">
                  <h6>Loan Interest Rate : {info.rate}% </h6>
                  <h6>Total number of Payments : {info.numOfPayments} </h6>
                  <h6>Monthly Payment Amount : $ {info.monthlyAmount} </h6>
                </div>
              )}
            </div>
          </div>
          <div className="card mt-5">
            <div className="card-header">Recent</div>
            <div className="card-body">
              {recentInput.length === 0 ? (
                <p className="info">
                  Your recent combinations will show up here...
                </p>
              ) : (
                recentInput.map((input, i) => (
                  <div className="recent-search" key={i}>
                    <h6 className="recent-search-description">
                      Prinipal Amount of $ {input.amount} for {input.duration}{" "}
                      months.{" "}
                    </h6>
                    <button
                      className="btn  btn-sm btn-generate"
                      onClick={e => {
                        scrollToRef(toTop);
                        setAmount(input.amount);
                        setDuration(input.duration);
                      }}
                    >
                      {" "}
                      Try this combination
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
