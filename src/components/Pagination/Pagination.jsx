

const Pagination = ({ postperpage, totalpost, setCureentPage, Cureentpage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
        pages.push(i);
    }

    const handleNext = () => {
        if (Cureentpage < pages.length) {
            setCureentPage(Cureentpage + 1);
        }
    };

    const handlePrevious = () => {
        if (Cureentpage > 1) {
            setCureentPage(Cureentpage - 1);
        }
    };

    return (
        <div>
            <button onClick={handlePrevious} disabled={Cureentpage === 1} className="text-center border btn hover:text-white border-none hover:bg-black bg-white text-black">
                Previous
            </button>
            {
                pages.map((page, indx) => {
                    return (
                        <button
                            key={indx}
                            onClick={() => setCureentPage(page)}
                            className={`text-center border btn hover:text-white border-none hover:bg-black ${Cureentpage === page ? 'bg-black text-white' : 'bg-white text-black'}`}
                        >
                            {page}
                        </button>
                    );
                })
            }
            <button onClick={handleNext} disabled={Cureentpage === pages.length} className="text-center border btn hover:text-white border-none hover:bg-black bg-white text-black">
                Next
            </button>
        </div>
    );
};

export default Pagination;
