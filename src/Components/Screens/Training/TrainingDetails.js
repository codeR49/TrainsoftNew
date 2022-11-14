import { useContext, useState, useEffect } from "react";
import '../Batches/batches.css'
import './training.css'
import { TabBtn } from "../../Common/Buttons/Buttons";
import SearchBox from "../../Common/SearchBox/SearchBox";
import TrainingInfo from "./TrainingInfo/TrainingInfo";
import { Router } from "../../Common/Router";
import Session from "./Session/Session";
import Assessment from "./Assessment/Assessment";
import Forum from "./Forum/Forum";
import Report from "./Report/Report";
import { useNavigate } from "@reach/router"
import CardHeader from "../../Common/CardHeader";
import useToast from "../../../Store/ToastHook";
import moment from 'moment'
import AppContext from "../../../Store/AppContext";
import TrainingContext from "../../../Store/TrainingContext";
import RestService from "../../../Services/api.service";
import DropdownItem from "../../Common/DropdownItem/DropdownItem";
import VideoMediaPlayer from "./TrainingMediaPlayer/VideoMediaPlayer";
import DynamicTable from "../../Common/DynamicTable/DynamicTable";

const TrainingDetails = ({ location }) => {
    const [trainingDetailsList, setTrainingDetailsList] = useState([]);
    const { spinner } = useContext(AppContext)
    // const {setTraining,training} = useContext(TrainingContext)
    // const Toast = useToast();
    const training = [
        {

            "name": "October Batch Nodejs",
            "topics": [
                {
                    "description": "Introduction 1"
                },
                {
                    "description": "Introduction 2"
                },
                {
                    "description": "Introduction 3"
                },
                {
                    "description": "Introduction 4"
                }
            ]

        },
        {

            "name": "October Batch Python",
            "topics": [
                {
                    "description": "Introduction 1"
                },
                {
                    "description": "Introduction 2"
                },
                {
                    "description": "Introduction 3"
                },
                {
                    "description": "Introduction 4"
                }
            ]

        },
        {

            "name": "October Batch Ruby",
            "topics": [
                {
                    "description": "Introduction 1"
                },
                {
                    "description": "Introduction 2"
                },
                {
                    "description": "Introduction 3"
                },
                {
                    "description": "Introduction 4"
                }
            ]

        },
        {

            "name": "October Batch Java",
            "topics": [
                {
                    "description": "Introduction 1"
                },
                {
                    "description": "Introduction 2"
                },
                {
                    "description": "Introduction 3"
                },
                {
                    "description": "Introduction 4"
                }
            ]

        },
        {

            "name": "October Batch C++",
            "topics": [
                {
                    "description": "Introduction 1"
                },
                {
                    "description": "Introduction 2"
                },
                {
                    "description": "Introduction 3"
                },
                {
                    "description": "Introduction 4"
                }
            ]
        },
        {

            "name": "October Batch C",
            "topics": [
                {
                    "description": "Introduction 1"
                },
                {
                    "description": "Introduction 2"
                },
                {
                    "description": "Introduction 3"
                },
                {
                    "description": "Introduction 4"
                }
            ]

        }
    ]
    const navigate = useNavigate();

    const [configuration, setConfiguration] = useState({
        columns: {

            "description": {
                "title": "Content Name",
                "sortDirection": null,
                "sortEnabled": true,
                isSearchEnabled: false,
                render: (data) => data.description
            },
            // "description": {
            //     "title": "Description",
            //     "sortDirection": null,
            //     "sortEnabled": true,
            //     isSearchEnabled: false,

            // },
            // "contentLink": {
            //     "title": "Content Link",
            //     "sortDirection": null,
            //     "sortEnabled": true,
            //     isSearchEnabled: false,
            //     render: (data) => <Button onClick={() => window.open(`${data.contentLink}`, "_blank")} >Link</Button>
            // }
        },
        headerTextColor: '#454E50', // user can change table header text color
        sortBy: null,  // by default sort table by name key
        sortDirection: false, // sort direction by default true
        updateSortBy: (sortKey) => {
            configuration.sortBy = sortKey;
            Object.keys(configuration.columns).map(key => configuration.columns[key].sortDirection = (key === sortKey) ? !configuration.columns[key].sortDirection : false);
            configuration.sortDirection = configuration.columns[sortKey].sortDirection;
            setConfiguration({ ...configuration });
        },
        // actions: [
        //     {
        //         "title": "Edit",
        //         "icon": ICN_EDIT,
        //         // "onClick": (data, i) => { setIsEdit(true); setShow(true); setInitialValues({ name: data.name, description: data.description, sid: data.sid }) }
        //     },
        //     {
        //         "title": "Delete",
        //         "icon": ICN_TRASH,
        //         // "onClick": (data) => deleteCourse(data.sid)
        //     }
        // ],
        actionCustomClass: "no-chev esc-btn-dropdown", // user can pass their own custom className name to add/remove some css style on action button
        actionVariant: "", // user can pass action button variant like primary, dark, light,
        actionAlignment: true, // user can pass alignment property of dropdown menu by default it is alignLeft 
        // call this callback function onSearch method in input field on onChange handler eg: <input type="text" onChange={(e) => onSearch(e.target.value)}/>
        // this search is working for search enable fields(column) eg. isSearchEnabled: true, in tale column configuration
        searchQuery: "",
        tableCustomClass: "ng-table sort-enabled", // table custom class
        showCheckbox: true,
        clearSelection: false
    });

    // const getTrainingContentsByTrainingSid = async () => {
    //     try {
    //         let trainingSid = location.state.sid;
    //         spinner.show();
    //         RestService.getTrainingContentsByTrainingSid(trainingSid).then(
    //             response => {
    //                 console.log(response.data);
    //                 setTrainingDetailsList(response.data);
    //             },
    //             err => {
    //                 spinner.hide();
    //             }
    //         ).finally(() => {
    //             spinner.hide();
    //         });
    //     } catch (err) {
    //         console.error("error occur on getSession()", err)
    //     }
    // }

    // initialize component
    // useEffect(() => {
    //     getTrainingContentsByTrainingSid();
    // }, [])
    // console.log(location.state.sid);
    return (
        <>
            <hr />
            {/* <div className="table-shadow p-3 ">
            <Router>
                <TrainingInfo path="/"/>
                <Session path="session" />
                <Assessment path="assessment" />
                <Report path="report" />
                <Forum path="forum" />
            </Router>

        </div> */}
     
                <div class="row">

                    <div class="col-9  pl-3 " >
                        <VideoMediaPlayer />
                    </div>
                    <div class="col-3 pl-3" style={{ background: "white", border:"1px solid #00000033",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",  width: "100%",background:"#FAFAFA", boxShadow: "#00000033 0px 0px 0px 1px, #00000033 0px 1px 1px -1px, #00000033 0px 1px 0px "}}>

                        {training.map((train) => {
                            return (
                                <>
                                    <div >
                                
                                    <DropdownItem title={train.name} theme="dark" >
                                      

<DynamicTable  {...{configuration, sourceData: train.topics}}  />
</DropdownItem>
                                        </div>
                                </>
                            )
                        })}
                    </div>
                </div>
           



        </>

    )
}
export default TrainingDetails