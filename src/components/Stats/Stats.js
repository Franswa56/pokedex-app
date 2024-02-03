import ProgressBar from "../ProgressBar/ProgressBar";
import './_Stats.scss'

function Stats( {stats} ) {


    return (
            <div className="stats-container">           
                <ProgressBar title={'HP'} value={stats.hp} />
                <ProgressBar title={'ATK'} value={stats.atk} />
                <ProgressBar title={'DEF'} value={stats.def} />
                <ProgressBar title={'ATK-SPE'} value={stats.spe_atk} />
                <ProgressBar title={'DEF-SPE'} value={stats.spe_def} />
                <ProgressBar title={'VIT'} value={stats.vit} />
            </div>
          );
}

export default Stats