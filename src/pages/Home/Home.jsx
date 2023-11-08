import { Helmet } from "react-helmet";
import titles from "../../titles/titles";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";

const Home = () => {

    const data = useLoaderData().data;

    return (
        <div className="px-10 lg:px-32 my-6">
            <Helmet>
                <title>{titles.home}</title>
            </Helmet>

            <div className="hero min-h-[60vh]">
                <div className="hero-content text-center">
                    <div className="max-w-9/12">
                        <h1 className="text-5xl font-bold">Introducing TopJobs</h1>
                        <h2 className="text-3xl font-semibold mt-4">Your Gateway to Career Opportunities</h2>
                        <div className="flex justify-center items-center">
                            <div className="join mx-auto mt-12">
                                <input className="input input-bordered join-item rounded-none" placeholder="Search Jobs"/>
                                <button className="btn join-item rounded-none btn-primary text-white normal-case">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-3xl font-bold text-center mb-8">Find Suitable Jobs From Various Companies</h1>
            <Tabs>
                <TabList>
                    <Tab>All Jobs</Tab>
                    <Tab>On-Site Jobs</Tab>
                    <Tab>Remote Jobs</Tab>
                    <Tab>Hybrid Jobs</Tab>
                    <Tab>Part Time Jobs</Tab>
                </TabList>
                {/* All  */}
                <TabPanel className={"mt-6"}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map(card => <JobCard key={card._id} data={card}></JobCard>)}
                    </div>
                </TabPanel>
                {/* Onsite */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map(card => {
                            if(card.category == "onsite") return <JobCard key={card._id} data={card}></JobCard>
                        })}
                    </div>
                </TabPanel>
                {/* Remote  */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map(card => {
                            if(card.category == "remote") return <JobCard key={card._id} data={card}></JobCard>
                        })}
                    </div>
                </TabPanel>
                {/* Hybrid  */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map(card => {
                            if(card.category == "hybrid") return <JobCard key={card._id} data={card}></JobCard>
                        })}
                    </div>
                </TabPanel>
                {/* Part Time */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map(card => {
                            if(card.category == "parttime") return <JobCard key={card._id} data={card}></JobCard>
                        })}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Home;
