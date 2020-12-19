import { withTheme } from 'styled-components';

import './Articles.css';
import img1 from './11.jpg';
import img2 from './22.jpg';
import img3 from './33.jpg';
import img4 from './4.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';


function Articles({ theme}) {
  return (
    <div className="Articles" style={{ backgroundColor: theme.cardBackgroundColor, color: theme.cardColor }}>

        <div class="card mb-3" style={{ backgroundColor: theme.darkerBackgroundColor }}>
          <img class="card-img-top" src={img1} alt="Card image cap"/>
          <div class="card-body">
           <h5 class="card-title">8 правил удаленной работы</h5>
           <p class="card-text"> Дома нас подстерегает большое количестов соблазнов, расскажем, как организовать работу вне офиса и  не вибиться из привычного ритма.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div class="card mb-3" style={{ backgroundColor: theme.darkerBackgroundColor }}>
          <img class="card-img-top" src={img2} alt="Card image cap"/>
          <div class="card-body">
           <h5 class="card-title">Как выучить всё без зубрёжки: метод карточек</h5>
           <p class="card-text">Тупая зубрёжка не работает. Даже когда надо выучить массу новых сведений. Освойте метод флеш-карточек, и тогда к экзаменам не придётся открывать учебник с ощущением, что всё забыто.</p>
            <p class="card-text"><small class="text-muted">Last updated 20 mins ago</small></p>
          </div>
        </div>

        <div class="card mb-3" style={{ backgroundColor: theme.darkerBackgroundColor }}>
          <img class="card-img-top" src={img3} alt="Card image cap"/>
          <div class="card-body">
           <h5 class="card-title">10 маленьких трюков, которые сделают вас умнее</h5>
           <p class="card-text">Неочевидные вещи, которые заставят мозг работать эффективнее.</p>
            <p class="card-text"><small class="text-muted">Last updated 50 mins ago</small></p>
          </div>
        </div>

        <div class="card mb-3" style={{ backgroundColor: theme.darkerBackgroundColor }}>
          <img class="card-img-top" src={img4} alt="Card image cap"/>
          <div class="card-body">
           <h5 class="card-title">Избавиться от вредных привычек - проще, чем кажется!</h5>
           <p class="card-text">Расскажем, как улучшить свою жизнь в игровом формате и почему вам стоит попробовать.  </p>
            <p class="card-text"><small class="text-muted">Last updated 59 mins ago</small></p>
          </div>
        </div>

    </div>
    
  );
}
export default withTheme(Articles);
