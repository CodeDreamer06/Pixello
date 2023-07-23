import Button from './Button';
import Badge from './Badge';
import PixelloLogo from '../assets/images/pixello_logo.png';
import RPlaceLogo from '../assets/images/rplace_logo.png';
import CommentCursor from '../assets/images/comment_cursor.png';

const Hero = props => {
	return <section className="hero">
		<img src={PixelloLogo} alt="pixello logo" />
		<div className="hero__content">
			<div>
				<h1>Collaborate and make art together on 
					<span className="hero__rplace">
						<span className="cursor-highlight">r/place</span>
						<img src={CommentCursor} alt="comment cursor" className="rplace-cursor"/>
					</span>
				</h1>
				<div>
					<Button isFilled={true}>get started</Button>
					<Button>donate</Button>
				</div>
			</div>
			<div className="hero__rplace-logo-container">
				<img src={RPlaceLogo} alt="rplace logo" />
				<Badge positioning={{top: -20, left: 0}}>r/india</Badge>
				<Badge positioning={{top: 20, right: -90}}>r/developers</Badge>
				<Badge positioning={{bottom: 40, right: -80}}>r/developers india</Badge>
			</div>
		</div>
	</section>
}

export default Hero;