import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { 
    useGetDetailByIdQuery, 
    useGetTopCastByIdQuery, 
    useGetRatingsByIdQuery, 
    useGetOverviewDetailsByIdQuery, 
    useGetFullCreditsByIdQuery 
} from "../../redux/api/movies";

import LeftContainer from "./components/LeftCointainer";
import RightContainer from "./components/RightContainer";

export default function Detail () {
    const { id } = useParams();
    const { 
        data: dataDetail, 
        isLoading: isLoadingDetail, 
        isSuccess: isSuccessDetail, 
        isFetching: isFetchingDetail,
        error: errorDetail
    } = useGetDetailByIdQuery(id);

    const { 
        data: dataTopCast, 
        isLoading: isLoadingTopCast, 
        isSuccess: isSuccessTopCast, 
        isFetching: isFetchingTopCast,
        error: errorTopCast
    } = useGetTopCastByIdQuery(id);

    const { 
        data: dataRatings, 
        isLoading: isLoadingRatings, 
        isSuccess: isSuccessRatings, 
        isFetching: isFetchingRatings,
        error: errorRatings
    } = useGetRatingsByIdQuery(id);

    const { 
        data: dataOverviewDetails, 
        isLoading: isLoadingOverviewDetails, 
        isSuccess: isSuccessOverviewDetails, 
        isFetching: isFetchingOverviewDetails,
        error: errorOverviewDetails
    } = useGetOverviewDetailsByIdQuery(id);

    const { 
        data: dataFullCredits, 
        isLoading: isLoadingFullCredits, 
        isSuccess: isSuccessFullCredits, 
        isFetching: isFetchingFullCredits,
        error: errorFullCredits
    } = useGetFullCreditsByIdQuery(id);
    
    const movieCast = dataFullCredits?.cast?.slice(0,20);

    const renderContent = () => {
        if ( isLoadingDetail ||  isFetchingRatings || isFetchingOverviewDetails ) {
            return <Loading message="Buscando información de la película..." />
        } else if ( errorDetail || errorRatings ) {
            return <Error />
        } else {
            return (
                <>
                    <LeftContainer movieUrl={dataDetail?.image?.url}/>
                    <RightContainer 
                        title={dataDetail?.title ?? "Sin título"} 
                        year={dataDetail?.year ?? "año no disponible"}
                        rating={dataRatings?.rating}
                        plotSummary={dataOverviewDetails?.plotSummary?.text ?? "Sinopsis no disponible"}
                        genres={dataOverviewDetails?.genres}
                        cast={movieCast}
                    />
                </>
            )
        }
    }
    return (
        <div className="flex flex-row px-16 h-screen items-center justify-center">
            {renderContent()}
        </div>
    )
    
}